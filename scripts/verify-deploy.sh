#!/usr/bin/env bash
# Verify that the live Hostinger deployment matches the local git HEAD.
# Usage: bash scripts/verify-deploy.sh
# Exit code: 0 = all checks pass, 1 = one or more failures.

set -euo pipefail

CB=$(date +%s)
PASS=0
FAIL=0
LOCAL_SHA=$(git rev-parse HEAD)

RED='\033[0;31m'; GRN='\033[0;32m'; YLW='\033[1;33m'; RST='\033[0m'
ok()   { echo -e "${GRN}  PASS${RST}  $*"; ((PASS++)); }
fail() { echo -e "${RED}  FAIL${RST}  $*"; ((FAIL++)); }
info() { echo -e "${YLW}  INFO${RST}  $*"; }

check_asset() {
  local label="$1" url="$2"
  local out
  out=$(curl -sI "${url}?cb=${CB}" 2>/dev/null)
  local status ct cl
  status=$(echo "$out" | grep -i "^HTTP"    | awk '{print $2}' | tr -d '\r')
  ct=$(    echo "$out" | grep -i "^content-type"   | cut -d' ' -f2- | tr -d '\r')
  cl=$(    echo "$out" | grep -i "^content-length" | cut -d' ' -f2- | tr -d '\r')
  echo "  ${label}"
  echo "    status=${status:-?}  type=${ct:-?}  length=${cl:-?}"
  if [[ "$status" == "200" ]]; then
    ok "$label is 200"
  else
    fail "$label returned ${status:-no response} (expected 200)"
  fi
}

echo ""
echo "========================================"
echo " SignISL deploy verification"
echo " Local HEAD : $LOCAL_SHA"
echo " Cache-buster: $CB"
echo "========================================"
echo ""

# ── version.txt ───────────────────────────────────────────────────────────────
echo "[ version.txt ]"
for HOST in "https://www.signisl.com" "https://signisl.com"; do
  LIVE_SHA=$(curl -s "${HOST}/version.txt?cb=${CB}" 2>/dev/null | tr -d '[:space:]')
  echo "  ${HOST}/version.txt → '${LIVE_SHA}'"
  if [[ -z "$LIVE_SHA" ]]; then
    fail "${HOST}: version.txt is empty or missing"
  elif [[ "$LIVE_SHA" == "$LOCAL_SHA" ]]; then
    ok "${HOST}: version matches local HEAD"
  else
    fail "${HOST}: live='${LIVE_SHA}' != local='${LOCAL_SHA}'"
    info "Hostinger is serving a different commit. Pull & redeploy from hPanel."
  fi
done
echo ""

# ── poster images (only exist from commit 4031d9e onward) ────────────────────
echo "[ poster images ]"
for HOST in "https://www.signisl.com" "https://signisl.com"; do
  check_asset "${HOST}/video-demo-1.jpg" "${HOST}/video-demo-1.jpg"
done
echo ""

# ── video files ───────────────────────────────────────────────────────────────
echo "[ video files ]"
for HOST in "https://www.signisl.com" "https://signisl.com"; do
  check_asset "${HOST}/video-demo-1.mp4" "${HOST}/video-demo-1.mp4"
  check_asset "${HOST}/video-demo-2.mp4" "${HOST}/video-demo-2.mp4"
done
echo ""

# ── summary ───────────────────────────────────────────────────────────────────
echo "========================================"
echo " Results: ${PASS} passed, ${FAIL} failed"
echo "========================================"
echo ""

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
