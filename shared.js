/* =====================================================
   SignISL - Shared JS: Navbar, Footer, Modals, Widget
   ===================================================== */

const LOGO_SVG = `<svg width="26" height="30" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 20 C8 26 10 33 16 33 C22 33 24 26 24 20 L24 16 C24 14.9 23.1 14 22 14 C20.9 14 20 14.9 20 16 L20 17 C20 15.9 19.1 15 18 15 C16.9 15 16 15.9 16 17 L16 18 C16 16.9 15.1 16 14 16 C12.9 16 12 16.9 12 18 L12 20 Z" fill="#5B4FCF"/><rect x="10" y="6" width="5" height="14" rx="2.5" fill="#5B4FCF"/><rect x="20" y="10" width="4" height="10" rx="2" fill="#5B4FCF"/><path d="M9 22 L3 17 C1.6 15.8 1.7 13.8 3 12.7 C4.3 11.6 6.3 11.9 7.4 13.3 L10 17" fill="#5B4FCF"/></svg>`;

/* ─── NAVBAR ─── */
const NAVBAR_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" style="padding:2px 0;">
      <img src="sign-isl-logo.png" alt="Sign ISL - Indian Sign Language" style="height:48px;object-fit:contain;display:block;border-radius:6px;">
    </a>
    <div class="nav-links">
      <a href="about.html" class="nav-link" data-page="about">About</a>
      <div class="nav-dropdown">
        <span class="nav-link" data-pages="demo,speech-isl,live-transcription,live-translation,widget,technology,classroom,hospital,government,home-family">
          Solutions <span class="nav-caret">▾</span>
        </span>
        <div class="dropdown-menu">
          <a href="demo.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(91,79,207,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5B4FCF" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>Text to Indian Sign Language</a>
          <a href="speech-isl.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(0,201,167,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" stroke-width="2" stroke-linecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg></span>Speech to Indian Sign Language</a>
          <a href="live-transcription.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(255,184,48,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFB830" stroke-width="2" stroke-linecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></span>Live Transcription</a>
          <a href="live-translation.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(255,143,207,.15)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF8FCF" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>Live Translation</a>
          <a href="widget.html" class="dropdown-item" style="border-top:1px solid rgba(91,79,207,.08);margin-top:4px;padding-top:10px;"><span class="dropdown-icon" style="background:rgba(123,111,232,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7B6FE8" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg></span>Website Widget</a>
          <a href="classroom.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(91,79,207,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5B4FCF" stroke-width="2" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>Classroom Mode</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <span class="nav-link" data-pages="industries,transport,banking,legal">
          Industries <span class="nav-caret">▾</span>
        </span>
        <div class="dropdown-menu" style="min-width:240px;">
          <a href="transport.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(123,111,232,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7B6FE8" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>Transport &amp; Railways</a>
          <a href="classroom.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(91,79,207,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5B4FCF" stroke-width="2" stroke-linecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>Schools &amp; Classrooms</a>
          <a href="hospital.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(255,107,107,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>Hospitals &amp; Clinics</a>
          <a href="government.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(255,184,48,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFB830" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>Government Services</a>
          <a href="home-family.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(0,201,167,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span>Home &amp; Family</a>
          <a href="transport.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(123,111,232,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7B6FE8" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>Transport &amp; Railways</a>
          <a href="banking.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(255,184,48,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFB830" stroke-width="2" stroke-linecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></span>Banking &amp; Finance</a>
          <a href="legal.html" class="dropdown-item"><span class="dropdown-icon" style="background:rgba(255,107,107,.1)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Legal &amp; Courts</a>
          <a href="industries.html" class="dropdown-item" style="border-top:1px solid rgba(91,79,207,.08);margin-top:4px;padding-top:10px;"><span class="dropdown-icon" style="background:rgba(91,79,207,.08)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5B4FCF" stroke-width="2" stroke-linecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></span>All Industries</a>
        </div>
      </div>
      <a href="technology.html" class="nav-link" data-page="technology">Technology</a>
      <a href="research.html"   class="nav-link" data-page="research">Research</a>
      <a href="awards.html"     class="nav-link" data-page="awards">Awards</a>
    </div>
    <div class="nav-cta">
      <button onclick="openISLWidget()" class="btn btn-g" style="gap:6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Text to ISL</button>
      <button onclick="openFounderModal()" class="btn btn-v btn-sm">Contact Founders</button>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <button class="mobile-close" id="mobile-close">✕</button>
  <div style="margin-bottom:8px;">
    <span style="background:#fff;border-radius:12px;padding:8px 18px;display:inline-flex;align-items:center;">
      <img src="sign-isl-logo.png" alt="Sign ISL" style="height:56px;object-fit:contain;display:block;">
    </span>
  </div>
  <a href="about.html"             class="mobile-link">About</a>
  <a href="index.html"             class="mobile-link">Home</a>
  <a href="demo.html"              class="mobile-link">Text to ISL</a>
  <a href="speech-isl.html"        class="mobile-link">Speech to ISL</a>
  <a href="live-transcription.html" class="mobile-link">Live Transcription</a>
  <a href="live-translation.html"  class="mobile-link">Live Translation</a>
  <a href="industries.html"        class="mobile-link">Industries</a>
  <a href="technology.html"        class="mobile-link">Technology</a>
  <a href="research.html"          class="mobile-link">Research</a>
  <a href="awards.html"            class="mobile-link">Awards</a>
  <button onclick="openISLWidget();document.getElementById('mobile-menu').classList.remove('open')" class="mobile-link" style="background:none;border:none;cursor:pointer;color:#00C9A7;font-family:'Noto Sans',sans-serif;font-size:22px;font-weight:700;">Text to ISL Converter</button>
  <button onclick="openFounderModal();document.getElementById('mobile-menu').classList.remove('open')" class="mobile-link" style="background:none;border:none;cursor:pointer;color:#FFB830;font-family:'Noto Sans',sans-serif;font-size:22px;font-weight:700;">Contact Founders →</button>
</div>`;

/* ─── FOOTER ─── */
const FOOTER_HTML = `
<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" style="display:inline-flex;text-decoration:none;margin-bottom:4px;">
        <span style="background:#fff;border-radius:12px;padding:7px 16px;display:inline-flex;align-items:center;box-shadow:0 4px 16px rgba(0,0,0,.25);">
          <img src="sign-isl-logo.png" alt="Sign ISL" style="height:52px;object-fit:contain;display:block;">
        </span>
      </a>
        <p>Building an accessible India with AI - one sign at a time.</p>
      </div>
      <div class="footer-col">
        <h5>Industries</h5>
        <ul>
          <li><a href="classroom.html">Schools</a></li>
          <li><a href="hospital.html">Hospitals</a></li>
          <li><a href="government.html">Government</a></li>
          <li><a href="transport.html">Transport &amp; Railways</a></li>
          <li><a href="banking.html">Banking &amp; Finance</a></li>
          <li><a href="legal.html">Legal &amp; Courts</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="research.html">Research</a></li>
          <li><a href="awards.html">Awards</a></li>
          <li><a href="technology.html">Technology</a></li>
          <li><a href="demo.html">Live Demo</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact Founders</h5>
        <ul>
          <li><a href="mailto:PriyamArora55@gmail.com">Priyam Arora (CEO)</a></li>
          <li><a href="mailto:Sanju3916@rediffmail.com">Sanjeev Sharma (Co-CEO)</a></li>
          <li><a href="contact.html">General Enquiries</a></li>
          <li><a href="https://isl.davuniversity.org" target="_blank">ISL Converter</a></li>
          <li><a href="contact.html">WCAG 2.2 AA</a></li>
        </ul>
      </div>
    </div>
    <div class="a11y-statement">
      <span style="font-size:13px;color:rgba(255,255,255,.45);">♿ This website conforms to <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" style="color:rgba(255,255,255,.6);text-decoration:underline;">WCAG 2.2 Level AA</a> · Compliant with RPWD Act 2016 · <a href="#" onclick="openA11yPanel();return false;" style="color:#00C9A7;text-decoration:underline;">Accessibility Settings</a> · <a href="contact.html" style="color:rgba(255,255,255,.5);">Report an accessibility issue</a></span>
    </div>
    <div class="footer-bar">
      <span>© 2025 SignISL Technologies Pvt. Ltd. · Made for the Deaf Community in India</span>
      <span style="display:flex;flex-direction:column;gap:3px;text-align:right;"><span>WCAG 2.2 AA · RPWD Act 2016 Ready</span><span style="font-size:11px;opacity:.7;">Registered under Ministry of Corporate Affairs, India · DPIIT Recognised Startup</span></span>
    </div>
  </div>
</footer>`;

/* ─── FOUNDER MODAL (Two Founders) ─── */
const FOUNDER_MODAL_HTML = `
<div id="founder-modal" style="display:none;position:fixed;inset:0;z-index:1000;background:rgba(26,26,46,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:20px;">
  <div style="background:#fff;border-radius:20px;padding:36px 40px 32px;max-width:500px;width:100%;position:relative;max-height:92vh;overflow-y:auto;box-shadow:0 32px 80px rgba(45,42,142,.25);">
    <button onclick="closeFounderModal()" style="position:absolute;top:14px;right:14px;background:rgba(107,107,138,.1);border:none;color:#6B6B8A;width:34px;height:34px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s;" onmouseover="this.style.background='rgba(107,107,138,.2)'" onmouseout="this.style.background='rgba(107,107,138,.1)'">✕</button>
    <div style="font-family:'Noto Sans',sans-serif;font-size:22px;font-weight:800;color:#2D2A8E;margin-bottom:4px;">Meet Our Founders</div>
    <div style="font-family:'Noto Sans',sans-serif;font-size:14px;color:#6B6B8A;margin-bottom:22px;">Reach out directly - we respond within 24 hours.</div>
    <!-- Priyam Arora -->
    <div style="background:#F5F4FF;border-radius:14px;padding:20px;border:1px solid rgba(91,79,207,.15);margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:13px;margin-bottom:14px;">
        <img src="priyam-arora.jpg" alt="Priyam Arora" style="width:48px;height:48px;border-radius:50%;object-fit:cover;object-position:center top;flex-shrink:0;border:2px solid rgba(91,79,207,.25);">
        <div><div style="font-family:'Noto Sans',sans-serif;font-size:17px;font-weight:700;color:#2D2A8E;margin-bottom:2px;">Priyam Arora</div><div style="font-family:'Noto Sans',sans-serif;font-size:13px;color:#6B6B8A;">Founder &amp; CEO</div></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5B4FCF" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span style="font-family:'Noto Sans',sans-serif;font-size:14px;font-weight:600;color:#5B4FCF;">PriyamArora55@gmail.com</span></div>
      <div style="display:flex;gap:8px;"><a href="mailto:PriyamArora55@gmail.com" style="flex:1;background:#5B4FCF;color:#fff;border-radius:999px;padding:9px 14px;font-family:'Noto Sans',sans-serif;font-size:13px;font-weight:600;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:5px;">✉ Send Email</a><button onclick="copyEmail('PriyamArora55@gmail.com',this)" style="flex:1;border:1.5px solid #5B4FCF;background:transparent;color:#5B4FCF;border-radius:999px;padding:9px 14px;font-family:'Noto Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;">Copy</button></div>
    </div>
    <!-- Sanjeev Sharma -->
    <div style="background:#F0FFFD;border-radius:14px;padding:20px;border:1px solid rgba(0,201,167,.18);margin-bottom:22px;">
      <div style="display:flex;align-items:center;gap:13px;margin-bottom:14px;">
        <img src="sanjeev-sharma.png" alt="Sanjeev Sharma" style="width:48px;height:48px;border-radius:50%;object-fit:cover;object-position:center top;flex-shrink:0;border:2px solid rgba(0,201,167,.25);">
        <div><div style="font-family:'Noto Sans',sans-serif;font-size:17px;font-weight:700;color:#2D2A8E;margin-bottom:2px;">Sanjeev Sharma</div><div style="font-family:'Noto Sans',sans-serif;font-size:13px;color:#6B6B8A;">Co-Founder &amp; CEO</div></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A888" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span style="font-family:'Noto Sans',sans-serif;font-size:14px;font-weight:600;color:#00A888;">Sanju3916@rediffmail.com</span></div>
      <div style="display:flex;gap:8px;"><a href="mailto:Sanju3916@rediffmail.com" style="flex:1;background:#00C9A7;color:#1A1A2E;border-radius:999px;padding:9px 14px;font-family:'Noto Sans',sans-serif;font-size:13px;font-weight:600;text-align:center;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:5px;">✉ Send Email</a><button onclick="copyEmail('Sanju3916@rediffmail.com',this)" style="flex:1;border:1.5px solid #00C9A7;background:transparent;color:#00A888;border-radius:999px;padding:9px 14px;font-family:'Noto Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;">Copy</button></div>
    </div>
    <!-- Available for -->
    <div style="font-family:'Noto Sans',sans-serif;font-size:12px;font-weight:600;color:#3A3A5C;margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em;">Available for:</div>
    <div style="display:flex;flex-direction:column;gap:7px;">
      <div style="font-family:'Noto Sans',sans-serif;font-size:14px;color:#3A3A5C;display:flex;gap:10px;align-items:flex-start;"><span style="color:#4A3FBF;flex-shrink:0;">·</span>Government &amp; ministry partnerships</div>
      <div style="font-family:'Noto Sans',sans-serif;font-size:14px;color:#3A3A5C;display:flex;gap:10px;align-items:flex-start;"><span style="color:#4A3FBF;flex-shrink:0;">·</span>School and NGO integrations</div>
      <div style="font-family:'Noto Sans',sans-serif;font-size:14px;color:#3A3A5C;display:flex;gap:10px;align-items:flex-start;"><span style="color:#4A3FBF;flex-shrink:0;">·</span>Investor and press inquiries</div>
      <div style="font-family:'Noto Sans',sans-serif;font-size:14px;color:#3A3A5C;display:flex;gap:10px;align-items:flex-start;"><span style="color:#4A3FBF;flex-shrink:0;">·</span>Live product demonstrations</div>
    </div>
  </div>
</div>`;

/* ─── ISL WIDGET MODAL ─── */
const ISL_WIDGET_MODAL_HTML = `
<div id="isl-widget-modal" style="display:none;position:fixed;inset:0;z-index:1001;background:rgba(10,10,24,0.88);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);align-items:center;justify-content:center;padding:16px;">
  <div style="background:#1A1A2E;border-radius:20px;width:min(960px,96vw);height:min(720px,92vh);overflow:hidden;box-shadow:0 32px 80px rgba(0,0,0,.6);display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.08);">
    <div style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:12px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:9px;height:9px;border-radius:50%;background:#00C9A7;position:relative;flex-shrink:0;"><div style="position:absolute;inset:-4px;border-radius:50%;background:#00C9A7;animation:pulse 1.6s ease-out infinite;opacity:.4;"></div></div>
        <span style="font-family:'Noto Sans',sans-serif;font-size:15px;font-weight:800;color:#fff;">ISL Converter</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
        <a href="https://isl.davuniversity.org" target="_blank" rel="noopener" style="height:32px;padding:0 14px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);font-family:'Noto Sans',sans-serif;font-size:12px;font-weight:700;display:inline-flex;align-items:center;gap:5px;text-decoration:none;">Open in New Tab →</a>
        <button onclick="closeISLWidget()" style="background:rgba(255,255,255,.1);border:none;color:rgba(255,255,255,.7);width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
      </div>
    </div>
    <div style="position:relative;flex:1;overflow:hidden;min-height:0;">
      <div id="isl-w-loading" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;z-index:2;background:#0A0A18;">
        <div style="display:flex;gap:7px;">
          <div style="width:10px;height:10px;border-radius:50%;background:#00C9A7;animation:bounce 1.2s infinite;"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#00C9A7;animation:bounce 1.2s infinite .2s;"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#00C9A7;animation:bounce 1.2s infinite .4s;"></div>
        </div>
        <div style="font-family:'Noto Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.45);">Loading ISL Converter…</div>
      </div>
      <iframe id="isl-w-iframe" src="https://isl.davuniversity.org" style="width:100%;height:100%;border:none;display:block;position:relative;z-index:1;" title="ISL Converter - SignISL" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox" onload="islWidgetLoaded()" onerror="islWidgetError()"></iframe>
      <div id="isl-w-fallback" style="display:none;position:absolute;inset:0;background:#0D0D1E;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:40px;text-align:center;z-index:3;">
        <div style="width:72px;height:72px;border-radius:50%;background:rgba(91,79,207,.18);display:flex;align-items:center;justify-content:center;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9B8FF8" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
        <div style="font-family:'Noto Sans',sans-serif;font-size:20px;font-weight:800;color:#fff;">Open ISL Converter</div>
        <div style="font-family:'Noto Sans',sans-serif;font-size:14px;color:rgba(255,255,255,.5);line-height:1.7;max-width:360px;">Click below to open the SignISL ISL converter in a new tab for the full experience.</div>
        <a href="https://isl.davuniversity.org" target="_blank" rel="noopener" style="background:#5B4FCF;color:#fff;border-radius:999px;padding:14px 36px;font-family:'Noto Sans',sans-serif;font-size:15px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:10px;">Open ISL Converter →</a>
        <a href="demo.html" style="font-family:'Noto Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;">Or view on Demo page</a>
      </div>
    </div>
  </div>
</div>`;

/* ─── VIDEO DEMO MODAL ─── */
const VIDEO_DEMO_MODAL_HTML = `
<div id="video-demo-modal" style="display:none;position:fixed;inset:0;z-index:1002;background:rgba(10,10,24,.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);align-items:center;justify-content:center;padding:16px;">
  <div style="background:#1A1A2E;border-radius:24px;width:min(1020px,96vw);max-height:92vh;overflow:hidden;overflow-y:auto;box-shadow:0 32px 80px rgba(0,0,0,.7);display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.09);">

    <!-- Header -->
    <div style="padding:16px 22px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:12px;position:sticky;top:0;background:#1A1A2E;z-index:3;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:9px;height:9px;border-radius:50%;background:#FF6B6B;position:relative;flex-shrink:0;"><div style="position:absolute;inset:-4px;border-radius:50%;background:#FF6B6B;animation:pulse 1.6s ease-out infinite;opacity:.4;"></div></div>
        <span style="font-family:'Noto Sans',sans-serif;font-size:15px;font-weight:800;color:#fff;">SignISL In Action</span>
        <span style="font-family:'Noto Sans',sans-serif;font-size:12px;color:rgba(255,255,255,.3);">Live Product Demos</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
        <button onclick="openISLWidget();closeVideoDemo()" style="height:32px;padding:0 14px;border-radius:999px;background:rgba(91,79,207,.22);border:1px solid rgba(91,79,207,.4);color:#9B8FF8;font-family:'Noto Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:5px;white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(91,79,207,.4)'" onmouseout="this.style.background='rgba(91,79,207,.22)'">Try Live →</button>
        <button onclick="closeVideoDemo()" style="background:rgba(255,255,255,.1);border:none;color:rgba(255,255,255,.65);width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s;" onmouseover="this.style.background='rgba(255,255,255,.2)'" onmouseout="this.style.background='rgba(255,255,255,.1)'">✕</button>
      </div>
    </div>

    <!-- Videos -->
    <div style="padding:24px;display:flex;flex-wrap:wrap;gap:20px;">

      <!-- Video 1 -->
      <div style="flex:1;min-width:min(100%,380px);background:rgba(255,255,255,.04);border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;">
        <div style="padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:9px;">
          <span style="background:rgba(0,201,167,.15);color:#00C9A7;border:1px solid rgba(0,201,167,.28);border-radius:999px;padding:3px 10px;font-family:'Noto Sans',sans-serif;font-size:11px;font-weight:600;white-space:nowrap;">Demo 1</span>
          <span style="font-family:'Noto Sans',sans-serif;font-size:13px;font-weight:600;color:rgba(255,255,255,.8);">Live ISL Translation</span>
        </div>
        <div style="background:#000;flex-shrink:0;">
          <video controls playsinline preload="none" style="width:100%;display:block;"><source src="video-demo-1.mp4" type="video/mp4"></video>
        </div>
        <div style="padding:16px 18px;flex:1;">
          <h4 style="font-family:'Noto Sans',sans-serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;">AI-Powered ISL Avatar</h4>
          <p style="font-family:'Noto Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.5);line-height:1.65;">Watch SignISL translate speech and text into Indian Sign Language in real time - the AI avatar signs every word instantly across 12+ Indian languages.</p>
        </div>
      </div>

      <!-- Video 2 -->
      <div style="flex:1;min-width:min(100%,380px);background:rgba(255,255,255,.04);border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;">
        <div style="padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:9px;">
          <span style="background:rgba(123,111,232,.2);color:#9B8FF8;border:1px solid rgba(123,111,232,.3);border-radius:999px;padding:3px 10px;font-family:'Noto Sans',sans-serif;font-size:11px;font-weight:600;white-space:nowrap;">Demo 2</span>
          <span style="font-family:'Noto Sans',sans-serif;font-size:13px;font-weight:600;color:rgba(255,255,255,.8);">Website Widget</span>
        </div>
        <div style="background:#000;flex-shrink:0;">
          <video controls playsinline preload="none" style="width:100%;display:block;"><source src="video-demo-2.mp4" type="video/mp4"></video>
        </div>
        <div style="padding:16px 18px;flex:1;">
          <h4 style="font-family:'Noto Sans',sans-serif;font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;">One-Line Website Widget</h4>
          <p style="font-family:'Noto Sans',sans-serif;font-size:13px;color:rgba(255,255,255,.5);line-height:1.65;">See the SignISL widget embedded live - one script tag brings full ISL accessibility to any HTML, React, or WordPress site in under 5 minutes.</p>
        </div>
      </div>

    </div>

    <!-- CTA row -->
    <div style="padding:0 24px 26px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button onclick="openFounderModal();closeVideoDemo()" style="background:#5B4FCF;color:#fff;border-radius:999px;padding:0 28px;height:46px;font-family:'Noto Sans',sans-serif;font-weight:700;font-size:14px;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;box-shadow:0 6px 20px rgba(91,79,207,.4);transition:all .25s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">Contact Founders →</button>
      <a href="widget.html" onclick="closeVideoDemo()" style="background:rgba(255,255,255,.07);color:rgba(255,255,255,.75);border-radius:999px;padding:0 24px;height:46px;font-family:'Noto Sans',sans-serif;font-weight:700;font-size:14px;border:1px solid rgba(255,255,255,.15);cursor:pointer;display:inline-flex;align-items:center;gap:8px;text-decoration:none;transition:background .2s;" onmouseover="this.style.background='rgba(255,255,255,.14)'" onmouseout="this.style.background='rgba(255,255,255,.07)'">Integration Guide</a>
    </div>
  </div>
</div>`;

/* ─── FLOATING ISL WIDGET BUTTON ─── */
const ISL_WIDGET_BTN_HTML = `
<div id="isl-widget-btn" style="position:fixed;bottom:152px;right:26px;z-index:990;display:flex;flex-direction:column;align-items:flex-end;gap:10px;">
  <button onclick="openVideoDemo()" style="background:#1A1A2E;border:1.5px solid rgba(255,107,107,.55);border-radius:999px;padding:11px 18px;display:flex;align-items:center;gap:8px;cursor:pointer;box-shadow:0 6px 22px rgba(255,107,107,.18);transition:all .25s;color:#fff;font-family:'Noto Sans',sans-serif;font-weight:700;font-size:13px;white-space:nowrap;" onmouseover="this.style.transform='translateY(-2px)';this.style.borderColor='rgba(255,107,107,.9)';this.style.boxShadow='0 10px 28px rgba(255,107,107,.28)'" onmouseout="this.style.transform='';this.style.borderColor='rgba(255,107,107,.55)';this.style.boxShadow='0 6px 22px rgba(255,107,107,.18)'"><svg width="13" height="13" viewBox="0 0 24 24" fill="#FF6B6B" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>Watch Demo</button>
  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
    <button onclick="openISLWidget()" style="background:#5B4FCF;border:none;border-radius:999px;padding:12px 20px;display:flex;align-items:center;gap:9px;cursor:pointer;box-shadow:0 8px 28px rgba(91,79,207,.45);transition:all .25s;color:#fff;font-family:'Noto Sans',sans-serif;font-weight:700;font-size:14px;white-space:nowrap;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 36px rgba(91,79,207,.55)'" onmouseout="this.style.transform='';this.style.boxShadow='0 8px 28px rgba(91,79,207,.45)'"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Text to ISL</button>
  </div>
</div>`;

/* ─── INJECT ─── */
document.addEventListener('DOMContentLoaded', () => {
  const navRoot    = document.getElementById('nav-root');
  const footerRoot = document.getElementById('footer-root');
  if (navRoot)    navRoot.innerHTML    = NAVBAR_HTML;
  if (footerRoot) footerRoot.innerHTML = FOOTER_HTML;
  /* WCAG: lang + landmark */
  if (!document.documentElement.getAttribute('lang')) document.documentElement.setAttribute('lang','en');
  const mainEl = document.querySelector('main');
  if (mainEl && !mainEl.id) mainEl.id = 'main-content';

  /* active nav state */
  const page = location.pathname.split('/').pop().replace('.html','') || 'index';
  document.querySelectorAll('.nav-link[data-page]').forEach(el => {
    if (el.dataset.page === page) el.classList.add('active');
  });
  document.querySelectorAll('.nav-link[data-pages]').forEach(el => {
    if (el.dataset.pages.split(',').includes(page)) el.classList.add('active');
  });

  /* hamburger */
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  const cls = document.getElementById('mobile-close');
  if (ham && mob) {
    ham.addEventListener('click', () => mob.classList.toggle('open'));
    cls && cls.addEventListener('click', () => mob.classList.remove('open'));
  }

  /* scroll-to-top + navbar shadow */
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('stu');
    if (btn) btn.classList.toggle('show', window.scrollY > 350);
    const nav = document.querySelector('#nav-root nav');
    if (nav) {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 24px rgba(45,42,142,.12)';
        nav.style.borderBottomColor = 'rgba(91,79,207,.18)';
      } else {
        nav.style.boxShadow = 'none';
        nav.style.borderBottomColor = 'rgba(91,79,207,.12)';
      }
    }
  }, {passive:true});

  /* scroll animations */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach((e,i) => {
        if (e.isIntersecting) {
          e.target.style.animation = `fadein .5s ease ${(i%6)*.08}s both`;
          io.unobserve(e.target);
        }
      });
    }, {threshold:.12});
    document.querySelectorAll('.card,.glass,.ind-card,.mockup-card,.deploy-card,.tl-card,.feat-item,.stat-card,.award-card,.video-card,.founder-card')
      .forEach(el => io.observe(el));
  }

  /* inject floating ISL widget button */
  document.body.insertAdjacentHTML('beforeend', ISL_WIDGET_BTN_HTML);

  /* smooth page exit transition */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http') || a.target === '_blank') return;
    e.preventDefault();
    document.body.style.transition = 'opacity .25s ease';
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 240);
  });

  /* videos load natively via <source> elements — no preload needed */
});

/* ─── SCROLL TO TOP ─── */
function scrollTop() { window.scrollTo({top:0,behavior:'smooth'}); }

/* ─── LAZY VIDEO LOADER ─── */
document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) return;
  const lazyVids = document.querySelectorAll('video[preload="none"]');
  const vidObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const video = entry.target;
      // Load src only when in viewport
      video.querySelectorAll('source').forEach(src => {
        if (src.dataset.src) { src.src = src.dataset.src; }
      });
      video.preload = 'metadata';
      video.load();
      vidObserver.unobserve(video);
    });
  }, { rootMargin: '200px' });
  lazyVids.forEach(v => vidObserver.observe(v));
});

/* ─── SLIDESHOW ─── */
let _cur = 0, _timer;
function _slides() { return document.querySelectorAll('.slide'); }
function _dots()   { return document.querySelectorAll('.sdot'); }
function slideTo(n) {
  const sl=_slides(),dt=_dots(); if(!sl.length) return;
  sl[_cur].classList.remove('active'); dt[_cur] && dt[_cur].classList.remove('active');
  _cur = ((n%sl.length)+sl.length)%sl.length;
  sl[_cur].classList.add('active'); dt[_cur] && dt[_cur].classList.add('active');
  const cnt=document.querySelector('.slide-count'); if(cnt) cnt.textContent=`${_cur+1} / ${sl.length}`;
}
function slideNext() { slideTo(_cur+1); _resetTimer(); }
function slidePrev() { slideTo(_cur-1); _resetTimer(); }
function _resetTimer() { clearInterval(_timer); _timer=setInterval(()=>slideTo(_cur+1),4800); }
document.addEventListener('DOMContentLoaded', () => {
  if(_slides().length){ slideTo(0); _resetTimer(); }
});

/* ─── DEMO INTERACTIONS ─── */
function setChip(t) { const ta=document.getElementById('demo-text'); if(ta) ta.value=t; }
function triggerTranslate() {
  const ta=document.getElementById('demo-text'), cap=document.getElementById('demo-cap'), ind=document.getElementById('trans-ind'), av=document.getElementById('demo-av');
  if(!ta) return;
  const map={'Hello':'नमस्ते · Hello','My name is...':'मेरा नाम है… · My name is…','I need help':'मुझे सहायता चाहिए · I need help','Good morning':'सुप्रभात · Good morning','Where is the doctor?':'डॉक्टर कहाँ हैं? · Where is the doctor?','Thank you':'धन्यवाद · Thank you','Please repeat':'कृपया दोहराएं · Please repeat'};
  if(ind){ind.style.opacity='1'} if(av){av.style.opacity='.5'} if(cap){cap.style.opacity='.4'}
  setTimeout(()=>{
    const v=ta.value.trim(); const res=map[v]||(v?`"${v.substring(0,22)}" → ISL`:'नमस्ते · Hello');
    if(cap){cap.textContent=res;cap.style.opacity='1'} if(ind){ind.style.opacity='.4'} if(av){av.style.opacity='1'}
  }, 950);
}
function setSpeed(btn){ document.querySelectorAll('.spbtn').forEach(b=>b.classList.remove('on')); btn.classList.add('on'); }

/* ─── FORM SUBMIT ─── */
function submitForm(btn,successId='form-ok') {
  btn.textContent='Sending…'; btn.disabled=true;
  setTimeout(()=>{ const s=document.getElementById(successId); if(s) s.style.display='block'; btn.textContent='Submitted'; btn.style.background='#00C9A7'; }, 900);
}

/* ─── FAQ ACCORDION ─── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
});

/* ─── FOUNDER MODAL ─── */
function openFounderModal() {
  let m = document.getElementById('founder-modal');
  if (!m) {
    document.body.insertAdjacentHTML('beforeend', FOUNDER_MODAL_HTML);
    m = document.getElementById('founder-modal');
    m.addEventListener('click', function(e){ if(e.target===m) closeFounderModal(); });
  }
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeFounderModal() {
  const m = document.getElementById('founder-modal');
  if (m) m.style.display = 'none';
  document.body.style.overflow = '';
}

/* ─── EMAIL COPY (generic) ─── */
function copyEmail(email, btn) {
  navigator.clipboard.writeText(email).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    const prevBg = btn.style.background, prevColor = btn.style.color;
    btn.style.background = btn.style.borderColor || '#5B4FCF';
    btn.style.color = '#fff';
    setTimeout(() => { btn.textContent = orig; btn.style.background = prevBg; btn.style.color = prevColor; }, 2000);
  });
}
function copyFounderEmail(btn) { copyEmail('PriyamArora55@gmail.com', btn); }

/* ─── ISL WIDGET MODAL ─── */
function openISLWidget() {
  let m = document.getElementById('isl-widget-modal');
  if (!m) {
    document.body.insertAdjacentHTML('beforeend', ISL_WIDGET_MODAL_HTML);
    m = document.getElementById('isl-widget-modal');
    m.addEventListener('click', function(e){ if(e.target===m) closeISLWidget(); });
  }
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  /* If iframe hasn't confirmed load in 5s, show the fallback */
  setTimeout(() => {
    const loading = document.getElementById('isl-w-loading');
    const fallback = document.getElementById('isl-w-fallback');
    if (loading && loading.style.display !== 'none') {
      loading.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
    }
  }, 5000);
}
function closeISLWidget() {
  const m = document.getElementById('isl-widget-modal');
  if (m) m.style.display = 'none';
  document.body.style.overflow = '';
}
function islWidgetLoaded() {
  const l = document.getElementById('isl-w-loading');
  const f = document.getElementById('isl-w-fallback');
  const iframe = document.getElementById('isl-w-iframe');
  if (l) l.style.display = 'none';
  /* Detect X-Frame-Options block:
     - If iframe was blocked, the browser serves a same-origin error page —
       accessing contentWindow.location succeeds (no SecurityError).
     - If iframe loaded from external origin (isl.davuniversity.org),
       accessing contentWindow.location throws SecurityError → iframe is working. */
  try {
    void (iframe && iframe.contentWindow && iframe.contentWindow.location.href);
    /* Reached here without error → same-origin error page → iframe blocked */
    if (f) f.style.display = 'flex';
  } catch(e) {
    /* SecurityError → cross-origin load → iframe working fine, do nothing */
  }
}
function islWidgetError() {
  const l = document.getElementById('isl-w-loading'), f = document.getElementById('isl-w-fallback');
  if (l) l.style.display = 'none';
  if (f) f.style.display = 'flex';
}
/* Alias used by inline onerror handlers */
window.islWidgetError = islWidgetError;

/* ─── VIDEO BLOB CACHE (kept for API compat but not auto-used) ─── */
const _vBlobs = {};
function _preloadVid(file) { /* no-op: native <source> elements handle video loading */ }

/* ─── VIDEO DEMO MODAL ─── */
function openVideoDemo() {
  let m = document.getElementById('video-demo-modal');
  if (!m) {
    document.body.insertAdjacentHTML('beforeend', VIDEO_DEMO_MODAL_HTML);
    m = document.getElementById('video-demo-modal');
    m.addEventListener('click', function(e){ if(e.target===m) closeVideoDemo(); });
  }
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // Videos load natively via their <source> elements
}
function closeVideoDemo() {
  const m = document.getElementById('video-demo-modal');
  if (m) {
    m.querySelectorAll('video').forEach(v => { v.pause(); });
    m.style.display = 'none';
  }
  document.body.style.overflow = '';
}

/* ─── SDG TICKER ─── */
(function buildSDGTicker() {
  const sdgs = [
    { num: 4,  color: '#C5192D', name: 'Quality Education' },
    { num: 10, color: '#DD1367', name: 'Reduced Inequalities' },
    { num: 9,  color: '#FD6925', name: 'Industry, Innovation & Infrastructure' },
    { num: 8,  color: '#A21942', name: 'Decent Work & Economic Growth' },
    { num: 16, color: '#00689D', name: 'Peace, Justice & Strong Institutions' },
    { num: 17, color: '#19486A', name: 'Partnerships for the Goals' },
  ];

  const sep = '<span class="sdg-divider">◆</span>';

  const chips = sdgs.map(s =>
    `<div class="sdg-chip">` +
      `<span class="sdg-num-badge" style="background:${s.color}">SDG ${s.num}</span>` +
      `<span class="sdg-chip-name">${s.name}</span>` +
    `</div>${sep}`
  ).join('');

  const html =
    `<div class="sdg-ticker-bar">` +
      `<div class="sdg-ticker-label">` +
        `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` +
        `<span class="sdg-ticker-label-text">SDG&nbsp;Impact</span>` +
      `</div>` +
      `<div class="sdg-ticker-overflow">` +
        `<div class="sdg-ticker-track">${chips}${chips}</div>` +
      `</div>` +
    `</div>`;

  const main = document.querySelector('main');
  if (main) main.insertAdjacentHTML('afterbegin', html);
})();

/* ─── ACCESSIBILITY WIDGET ─── */
(function(){
  const KEY='signisl_a11y';
  let S={},curFS=16,maskEl=null;

  function save(){ localStorage.setItem(KEY,JSON.stringify(S)); }
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY))||{}; }catch(e){ return{}; } }

  function applyFS(n){ document.documentElement.style.fontSize=n+'px'; S.fontSize=n; curFS=n; }
  function tog(cls,on){ document.body.classList.toggle(cls,on); }
  function applyLH(on){  tog('a11y-line-height',on);    S.lineHeight=on; }
  function applyLS(on){  tog('a11y-letter-spacing',on); S.letterSpacing=on; }
  function applyWS(on){  tog('a11y-word-spacing',on);   S.wordSpacing=on; }
  function applyHC(on){  tog('a11y-high-contrast',on);  S.highContrast=on; }
  function applyHL(on){  tog('a11y-links-hl',on);       S.highlightLinks=on; }
  function applyHH(on){  tog('a11y-hdgs-hl',on);        S.highlightHeadings=on; }
  function applyEF(on){  tog('a11y-efocus',on);          S.enhancedFocus=on; }

  function refreshFilter(){
    let f='';
    if(S.grayscale) f+='grayscale(1) ';
    else if(S.invert) f+='invert(1) hue-rotate(180deg) ';
    if(S.saturation && S.saturation!=100) f+=`saturate(${S.saturation}%) `;
    document.body.style.filter=f.trim();
  }
  function applyInvert(on){ S.invert=on; refreshFilter(); }
  function applyGS(on){ S.grayscale=on; refreshFilter(); }
  function applySat(v){ S.saturation=v; refreshFilter(); }

  function applyTheme(t){
    document.body.classList.remove('a11y-dark-mode');
    document.body.style.background='';
    document.body.style.color='';
    if(t==='dark'){ document.body.style.background='#1A1A2E'; document.body.style.color='#fff'; document.body.classList.add('a11y-dark-mode'); }
    else if(t==='yellow'){ document.body.style.background='#FFF9E6'; }
    else if(t==='bw'){ document.body.style.background='#000'; document.body.style.color='#fff'; }
    S.theme=t;
    document.querySelectorAll('.a11y-tb').forEach(b=>b.classList.toggle('act',b.dataset.t===t));
  }

  function applyMask(on){
    S.readingMask=on;
    if(on){
      if(!maskEl){ maskEl=document.createElement('div'); maskEl.style.cssText='position:fixed;inset:0;z-index:9980;pointer-events:none;'; document.body.appendChild(maskEl); }
      maskEl.style.display='block';
      document.addEventListener('mousemove',moveMask);
      moveMask({clientY:window.innerHeight/2});
    } else {
      if(maskEl) maskEl.style.display='none';
      document.removeEventListener('mousemove',moveMask);
    }
  }
  function moveMask(e){
    if(!maskEl)return;
    const y=e.clientY,g=60;
    maskEl.style.background=`linear-gradient(to bottom,rgba(0,0,0,.45) 0,rgba(0,0,0,.45) ${y-g/2}px,transparent ${y-g/2}px,transparent ${y+g/2}px,rgba(0,0,0,.45) ${y+g/2}px,rgba(0,0,0,.45) 100%)`;
  }

  function applyRM(on){
    S.reduceMotion=on;
    let el=document.getElementById('a11y-rm-style');
    if(on&&!el){ el=document.createElement('style'); el.id='a11y-rm-style'; el.textContent='*{animation:none!important;transition:none!important;}'; document.head.appendChild(el); }
    else if(!on&&el) el.remove();
  }
  function applyPA(on){
    S.pauseAnimations=on;
    document.querySelectorAll('*').forEach(el=>el.style.animationPlayState=on?'paused':'');
  }
  function applyHI(on){
    S.hideImages=on;
    let el=document.getElementById('a11y-hi-style');
    if(on&&!el){ el=document.createElement('style'); el.id='a11y-hi-style'; el.textContent='img{visibility:hidden!important;}'; document.head.appendChild(el); }
    else if(!on&&el) el.remove();
  }
  function applyTA(a){
    S.textAlign=a;
    let el=document.getElementById('a11y-ta-style');
    if(!el){ el=document.createElement('style'); el.id='a11y-ta-style'; document.head.appendChild(el); }
    el.textContent=a?`body p,body li,body span{text-align:${a}!important;}`:"";    document.querySelectorAll('.a11y-ab').forEach(b=>b.classList.toggle('act',b.dataset.a===a));
  }
  function applyCS(c){
    S.cursorSize=c;
    let el=document.getElementById('a11y-cur-style');
    if(!el){ el=document.createElement('style'); el.id='a11y-cur-style'; document.head.appendChild(el); }
    const m={
      large:`*{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 2L8 26L14 20L18 30L22 28L18 18L26 18Z' fill='%232D2A8E' stroke='white' stroke-width='2'/%3E%3C/svg%3E") 0 0,auto!important;}`,
      xlarge:`*{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M12 3L12 39L21 30L27 45L33 42L27 27L39 27Z' fill='%232D2A8E' stroke='white' stroke-width='3'/%3E%3C/svg%3E") 0 0,auto!important;}`
    };
    el.textContent=m[c]||'';
    document.querySelectorAll('.a11y-cb').forEach(b=>b.classList.toggle('act',b.dataset.c===c));
  }
  function applyDF(on){
    S.dyslexiaFont=on;
    if(on&&!document.getElementById('od-link')){ const l=document.createElement('link'); l.id='od-link'; l.rel='stylesheet'; l.href='https://fonts.cdnfonts.com/css/opendyslexic'; document.head.appendChild(l); }
    document.body.style.fontFamily=on?'OpenDyslexic,sans-serif':'';
  }
  function applySR(on){
    S.screenReader=on;
    if(!on)return;
    if(!document.getElementById('a11y-announcer')){ const d=document.createElement('div'); d.id='a11y-announcer'; d.setAttribute('role','status'); d.setAttribute('aria-live','polite'); d.style.cssText='position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;'; document.body.appendChild(d); }
    document.querySelectorAll('button:not([aria-label])').forEach(el=>{ if(!el.textContent.trim()) el.setAttribute('aria-label','Button'); });
    document.querySelectorAll('a:not([aria-label])').forEach(el=>{ if(!el.textContent.trim()) el.setAttribute('aria-label','Link'); });
  }

  function chk(id,v){ const el=document.getElementById(id); if(el&&v) el.checked=true; }

  function restore(){
    S=load();
    if(S.fontSize)   applyFS(S.fontSize);
    if(S.lineHeight)        { applyLH(true);   chk('a11y-lh',true); }
    if(S.letterSpacing)     { applyLS(true);   chk('a11y-ls',true); }
    if(S.wordSpacing)       { applyWS(true);   chk('a11y-ws',true); }
    if(S.highContrast)      { applyHC(true);   chk('a11y-hc',true); }
    if(S.invert)            { S.invert=true;   chk('a11y-inv',true); }
    if(S.grayscale)         { S.grayscale=true; chk('a11y-gs',true); }
    if(S.invert||S.grayscale||S.saturation) refreshFilter();
    if(S.saturation&&S.saturation!=100){
      const sl=document.getElementById('a11y-sat'); const vl=document.getElementById('a11y-satv');
      if(sl) sl.value=S.saturation; if(vl) vl.textContent=S.saturation+'%';
    }
    if(S.theme&&S.theme!=='default') applyTheme(S.theme);
    if(S.highlightLinks)   { applyHL(true);   chk('a11y-hl',true); }
    if(S.highlightHeadings){ applyHH(true);   chk('a11y-hh',true); }
    if(S.enhancedFocus)    { applyEF(true);   chk('a11y-ef',true); }
    if(S.readingMask)      { applyMask(true); chk('a11y-rm-cb',true); }
    if(S.reduceMotion)     { applyRM(true);   chk('a11y-rmo',true); }
    if(S.pauseAnimations)  { applyPA(true);   chk('a11y-pa',true); }
    if(S.hideImages)       { applyHI(true);   chk('a11y-him',true); }
    if(S.textAlign)        applyTA(S.textAlign);
    if(S.cursorSize&&S.cursorSize!=='normal') applyCS(S.cursorSize);
    if(S.dyslexiaFont)     { applyDF(true);   chk('a11y-df',true); }
    if(S.screenReader)     { applySR(true);   chk('a11y-sr',true); }
  }

  const PANEL=`<div id="a11y-panel" role="dialog" aria-label="Accessibility Options" aria-modal="true">
  <div class="a11y-hdr">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2D2A8E" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0"><circle cx="12" cy="5" r="2.5"/><path d="M5 10.5l7-2.5 7 2.5"/><path d="M12 8v6l-3 6"/><path d="M12 14l3 6"/></svg>
    <span class="a11y-title">Accessibility Options</span>
    <button class="a11y-reset" id="a11y-rst">Reset All</button>
    <button class="a11y-x" id="a11y-close" aria-label="Close panel">&times;</button>
  </div>
  <div class="a11y-grp">
    <div class="a11y-grp-title">Text &amp; Reading</div>
    <div class="a11y-row"><span class="a11y-lbl">Text Size</span><div class="a11y-sz-btns"><button class="a11y-sz-btn" id="a11y-fd" aria-label="Decrease text size">A-</button><button class="a11y-sz-btn" id="a11y-fr" aria-label="Reset text size">A</button><button class="a11y-sz-btn" id="a11y-fi" aria-label="Increase text size">A+</button></div></div>
    <div class="a11y-row"><span class="a11y-lbl">Line Height</span><label class="a11y-tgl"><input type="checkbox" id="a11y-lh"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Letter Spacing</span><label class="a11y-tgl"><input type="checkbox" id="a11y-ls"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Word Spacing</span><label class="a11y-tgl"><input type="checkbox" id="a11y-ws"><span class="a11y-tgl-s"></span></label></div>
  </div>
  <div class="a11y-grp">
    <div class="a11y-grp-title">Visual &amp; Color</div>
    <div class="a11y-row"><span class="a11y-lbl">High Contrast</span><label class="a11y-tgl"><input type="checkbox" id="a11y-hc"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Invert Colors</span><label class="a11y-tgl"><input type="checkbox" id="a11y-inv"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Grayscale</span><label class="a11y-tgl"><input type="checkbox" id="a11y-gs"><span class="a11y-tgl-s"></span></label></div>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:6px;margin-bottom:10px;">
      <span class="a11y-lbl">Color Theme</span>
      <div class="a11y-theme-grid">
        <button class="a11y-tb a11y-theme-btn act" data-t="default">Default</button>
        <button class="a11y-tb a11y-theme-btn" data-t="dark">Dark Mode</button>
        <button class="a11y-tb a11y-theme-btn" data-t="yellow">Soft Yellow</button>
        <button class="a11y-tb a11y-theme-btn" data-t="bw">High Contrast</button>
      </div>
    </div>
    <div><div style="display:flex;justify-content:space-between;margin-bottom:3px;"><span class="a11y-lbl">Saturation</span><span id="a11y-satv" style="font-size:11px;color:#6B6B8A;">100%</span></div><input type="range" class="a11y-slider" id="a11y-sat" min="0" max="200" value="100" step="5" aria-label="Saturation"></div>
  </div>
  <div class="a11y-grp">
    <div class="a11y-grp-title">Navigation &amp; Focus</div>
    <div class="a11y-row"><span class="a11y-lbl">Highlight Links</span><label class="a11y-tgl"><input type="checkbox" id="a11y-hl"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Highlight Headings</span><label class="a11y-tgl"><input type="checkbox" id="a11y-hh"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Enhanced Focus</span><label class="a11y-tgl"><input type="checkbox" id="a11y-ef"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Reading Mask</span><label class="a11y-tgl"><input type="checkbox" id="a11y-rm-cb"><span class="a11y-tgl-s"></span></label></div>
  </div>
  <div class="a11y-grp">
    <div class="a11y-grp-title">Motion &amp; Display</div>
    <div class="a11y-row"><span class="a11y-lbl">Reduce Motion</span><label class="a11y-tgl"><input type="checkbox" id="a11y-rmo"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Pause Animations</span><label class="a11y-tgl"><input type="checkbox" id="a11y-pa"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Hide Images</span><label class="a11y-tgl"><input type="checkbox" id="a11y-him"><span class="a11y-tgl-s"></span></label></div>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:6px;">
      <span class="a11y-lbl">Text Alignment</span>
      <div class="a11y-seg"><button class="a11y-ab a11y-seg-btn" data-a="left">Left</button><button class="a11y-ab a11y-seg-btn" data-a="center">Center</button><button class="a11y-ab a11y-seg-btn" data-a="justify">Justified</button></div>
    </div>
  </div>
  <div class="a11y-grp">
    <div class="a11y-grp-title">Assistive Tools</div>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:6px;margin-bottom:10px;">
      <span class="a11y-lbl">Cursor Size</span>
      <div class="a11y-seg"><button class="a11y-cb a11y-seg-btn act" data-c="normal">Normal</button><button class="a11y-cb a11y-seg-btn" data-c="large">Large</button><button class="a11y-cb a11y-seg-btn" data-c="xlarge">X-Large</button></div>
    </div>
    <div class="a11y-row"><span class="a11y-lbl">Dyslexia Font</span><label class="a11y-tgl"><input type="checkbox" id="a11y-df"><span class="a11y-tgl-s"></span></label></div>
    <div class="a11y-row"><span class="a11y-lbl">Screen Reader Mode</span><label class="a11y-tgl"><input type="checkbox" id="a11y-sr"><span class="a11y-tgl-s"></span></label></div>
  </div>
  <div class="a11y-ftr">WCAG 2.2 AA Compliant &middot; SignISL &#9855;</div>
</div>
<button id="a11y-trigger" aria-label="Open accessibility options" title="Accessibility Options">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="5" r="2.5"/><path d="M5 10.5l7-2.5 7 2.5"/><path d="M12 8v6l-3 6"/><path d="M12 14l3 6"/></svg>
</button>
<div id="a11y-pulse"></div>`;

  function bindEvents(){
    const trigger=document.getElementById('a11y-trigger');
    const panel=document.getElementById('a11y-panel');
    trigger.addEventListener('click',e=>{ e.stopPropagation(); panel.classList.toggle('open'); });
    document.getElementById('a11y-close').addEventListener('click',()=>panel.classList.remove('open'));
    document.getElementById('a11y-rst').addEventListener('click',()=>{ localStorage.removeItem(KEY); location.reload(); });
    document.addEventListener('click',e=>{ if(!panel.contains(e.target)&&e.target!==trigger) panel.classList.remove('open'); });

    document.getElementById('a11y-fd').addEventListener('click',()=>{ curFS=Math.max(12,curFS-2); applyFS(curFS); save(); });
    document.getElementById('a11y-fr').addEventListener('click',()=>{ curFS=16; applyFS(16); save(); });
    document.getElementById('a11y-fi').addEventListener('click',()=>{ curFS=Math.min(24,curFS+2); applyFS(curFS); save(); });

    [
      ['a11y-lh',applyLH],['a11y-ls',applyLS],['a11y-ws',applyWS],
      ['a11y-hc',applyHC],['a11y-inv',applyInvert],['a11y-gs',applyGS],
      ['a11y-hl',applyHL],['a11y-hh',applyHH],['a11y-ef',applyEF],
      ['a11y-rm-cb',applyMask],['a11y-rmo',applyRM],['a11y-pa',applyPA],
      ['a11y-him',applyHI],['a11y-df',applyDF],['a11y-sr',applySR]
    ].forEach(([id,fn])=>{ const el=document.getElementById(id); if(el) el.addEventListener('change',e=>{ fn(e.target.checked); save(); }); });

    const sat=document.getElementById('a11y-sat');
    if(sat) sat.addEventListener('input',e=>{ document.getElementById('a11y-satv').textContent=e.target.value+'%'; applySat(e.target.value); save(); });

    document.querySelectorAll('.a11y-tb').forEach(b=>b.addEventListener('click',()=>{ applyTheme(b.dataset.t); save(); }));
    document.querySelectorAll('.a11y-ab').forEach(b=>b.addEventListener('click',()=>{ applyTA(b.classList.contains('act')?null:b.dataset.a); save(); }));
    document.querySelectorAll('.a11y-cb').forEach(b=>b.addEventListener('click',()=>{ applyCS(b.dataset.c); save(); }));

    setTimeout(()=>{ const p=document.getElementById('a11y-pulse'); if(p) p.remove(); },4000);
  }

  function initA11y(){
    document.body.insertAdjacentHTML('afterbegin','<a href="#main-content" class="a11y-skip-link">Skip to main content</a>');
    document.body.insertAdjacentHTML('beforeend',PANEL);
    restore();
    bindEvents();
    window.openA11yPanel=function(){ const p=document.getElementById('a11y-panel'); if(p) p.classList.add('open'); };
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initA11y);
  else initA11y();
})();
