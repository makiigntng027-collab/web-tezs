// Storage Key for registered users in LocalStorage
    const USERS_KEY = 'dixxie_registered_users';
    const CURRENT_USER_KEY = 'dixxie_active_session';
    const ADMIN_USERNAME_KEY = 'dixxie_admin_username';
    const ACCOUNT_SWITCH_MODE_KEY = 'dixxie_admin_account_switch_mode';
    const BABU_ADDITIONS_KEY = 'dixxie_babu_additions';
    const BABU_REMOVED_KEY = 'dixxie_babu_removed';
    const GALLERY_PHOTOS_KEY = 'dixxie_gallery_photos';
    const CORE_PLAYERS_KEY = 'dixxie_core_players';
    const SITE_THEME_KEY = 'dixxie_site_theme';
    const SITE_RGB_ENABLED_KEY = 'dixxie_site_rgb_enabled';
    const SITE_RGB_RAINBOW_KEY = 'dixxie_site_rgb_rainbow';
    const SITE_RGB_COLOR_KEY = 'dixxie_site_rgb_color';
    const GLOBAL_CHAT_KEY = 'dixxie_global_chat_messages';
    const MAX_GLOBAL_CHAT_MESSAGES = 200;
    const SITE_THEMES = {
      cyan: { primary: '#00f3ff', secondary: '#b000ff', tertiary: '#ff007f' },
      purple: { primary: '#a855f7', secondary: '#06b6d4', tertiary: '#ec4899' },
      pink: { primary: '#ec4899', secondary: '#8b5cf6', tertiary: '#f97316' },
      emerald: { primary: '#10b981', secondary: '#06b6d4', tertiary: '#84cc16' },
      amber: { primary: '#f59e0b', secondary: '#f97316', tertiary: '#ef4444' }
    };
    const MAX_GALLERY_PHOTO_SIZE = 1024 * 1024;
    let rgbRainbowTimer = null;
    let rgbRainbowHue = 0;
    const BABU_LIST_TEXT = `1.TAKAMEIKA
2.JEET
3.SUPER STARS
4.BARST444
5.LUCKY STAR
6.REBELLIONS
7.CATALYSTIC
8.AXERON
9.BL NEW ERA
10.VALONEX
11.STAR JET
12.87
13.TWO KEYZ 2K
14.REVENGE
15.AICATZY
16.STUDENT
17.ALLIED CREW
18.NOVA
19.EIGHTY
20.SCENEBOY
21.MARGA 22
22.STAYCOL
23.VORACIUS
24.FIVESIX
25.MONARCH
26.VEGAS
27.RENORD
28.BLACK COBRA
29.SUPERZZGODD
30.TRIXCLONE
31.MARGA SENTU
32.NEX4BOYS
33.SIXHARD
34.LUXRAY
35.ARCIVER
36.SUPER PRIME
37.DOMINIC
38.FOURTIX
39.ZEN
40.VEMOX888
41.VOXLY48
42.NOTELITE
43.TOPSTAR
44.SHYHARD
45.ALWAYSCEES
46.NEXXAS
47.PENAKUT
48.CUTEBOY
49.VIXENZ
50.TOPSTAR
51.NEXFORVXO
52.STG ELITE
53.STG PRIDE
54.FOURXSEVEN
55.EPCE
56.NEXZYPRIDE¹
57.STG PRIDE
58.FOURXSEVEN
59.MARGA 17
60.GOOD BOY
61.ICONIC
62.VERENXIC
63.REFOLIUST
64.MULTIVERSE
65.BASECAMP
66.SAMURAI
67.FORTALEZA
68.DEATH
69.ANTI REGE
70.KID BOY
71.MARGA 14
73.PSX
74.PETEMPUR
75.WS PRIDE
77.AlPANAOX
78.XENON
79.NOTELITE.PRIDE
80.PUKIMAX
81.FOURFIVE
82.MULTIEVER
83.DEMON ELITE
84.ANTI FILE
85.SIX R
86.NEXVERLUS
87.ZOCURE
88.NOXFORTY
89.STARHIGH
90.ROYALITY
91.HIGH
92.WS PRIDE
93.VORIUS
94.HIGH PRIME
95.STAR ANGELS
96.MEMSIS
97.YAZURA
98.NAGROG
99.BIEBER
100.TRIPLE SEVEN
101.ZHIREXX
102.NOMERCI
103.HIGH ELITE
104.7DEADLYSIN
105.603
106.NOXSIUS
107.VORAHIGH
108.BROCEES
109.STARCLASH
110.PEOPLE
111.FORSEX
112.ABYS
113.VILECHER
114.EVERBODY
115.JURAGAN
116.TRIPLE FIVE
117.EXPERT
118.ICONIC EXC
119.444
120.ROXSTAR
121.MARGA 19
122.VILENTY
123.NEXUX
124.VERENXIC
125.NOTEDEATH
126.FEGINOZ
127.DIKRI DIKWEN
128.SNOWEELA
129.XAVIERUZ
130.SOUTHGATE
131.SNOW GH
132.HIGH BOYSZ
133.MIGAVEL
134.ANAK MAMI
135.MYSTICOX
136.NEXORE ERA
137.CLAVERVANT
138.NEXTRPIME
139.VERONIC
140.FORLEX
141.VOLTAXE
142.ULTRANCE
143.MARVENUS
144.FLUXOK
145.LOCOGANK
146.SIRENENG
147.REVOURS
148.969
149.VENOX SILENT
150.ALIEN THE VILEN
151.XERON999
152.VENON
153.DOMENIC
154.NEVERLEFT
155.SUPERNOVA ELITE
156.THE MORNITE
157.ATERNOS
158.VORSIX
159.ALWAYS PRIME999
160.FALWON
161.HONORER
162.MOONIGHT
163.44 DREAMER
164.NS PRIDE X
165.VOLTRA
166.MALVADA
167.SALVADOR 87
168.FEARLIEX JR
169.SALVORA
170.XYLENT TRUE
171.NEVERLAND NEW ERA
172.SEVENEX
173.PELAKOR
174.SONIXC CEES
175.ESOLIN
176.MARGA23 CLASIC
177.LUCTURE
178.INTELLIGENTE
179.HOMENOXZE
180.MORVENZ
181.VELDORA
182.VOLTRA
183.LEMOXXI ERA
184.WINK HIGH
185.EXTEADER
186.FOXTAIL
187.VILLAIN 777
188.NOKUHARA
189.POWER OF HELL
190.NIXCURE
191.777SONIC
192.NEITH
193.NEXUS
194.CUMILOS
195.MALVADA PRIDE
196.BAND4BAND AREA
197.GOOD PRIME
198.NEKO
199.NOZENKAI
200.FORPL4Y
201.DOMIKAZE
202.BRAVEBLACK
203.BLADE GOD
204.VETEXT LATE
205.FOURCIN-J
206.EXCVENT
207.MEGHTY FORSE
208.ARCITIK
209.4NTBOX PRIDE
210.VILLAIN FAMILIA
211.POWER AREA
212.CELIUS
213.FOURIOS
214.PRIME ELITE
215.FOUR REVER
216.RUSHLES
217.SMILEY VILLE
218.ELITE DOMINANDO
219.MAXWEY
220.XANDROZ
221.POKER
222.VORTEX CEES
223.MORIARTY
224.VENERVOX
225.999
226.NOXSIUS
227.JUNIOR NT
228.444 PRIDE
229.FORHIGH
230.FEDE-1
231.NEXTWIN
232.QM4CK!
233.SCREET
234.ALIENTS
235.TORETO
236.WINSTARS
237.KELAZ HIGH
238.SOCIETY
239.NINETRHY
240.CARKECORR
241.AMRICAN
242.VYDROFOX
243.HYOUKA
244.AL FORTEX
245.FOURS1X
246.PRIME OZAKA
247.NELVES
248.ZXANZZU
249.TERMINATORS
250.77
251.SEXON
252.GULDAX
253.APEK LGN
254.SCLUPTOR
255.MERS
256.MIZUWARE
257.SANITY
258.TRIDENT
259.SLASHER
260.KEDAONG
261.FORCEES
262.EXCEL ENT
263.LAUZY
264.DARBUDAR
265.NOMERCY
267.TRIPLEEZET
268.VOURTEX
269.YV
270.LUCIVERO
271.THE VIL
272.HYPER HIGH
273.PRINCE HIGH
274.VALONEXS
275.VILENCY4YOU
276.TRINITY
277.CROWN
278.AIM HOKI
279.EXCELLENT
280.STANDING HIGH
281.VOLTAGE
282.NEXTFORDEATH
283.NEXT PRIDE
284.BODREX CEES
285.7KIDZ
286.GOLD BOYS
287.MEVER LIGHT
288.ZARGED
289.VOLTEXS
290.ROCKING 777
291.WLM DRAKSTER
292.HATAKE
293.ALIENTRIX
294.I'MXEUSE
295.ETHERUM
296.ALIEN PRIDE
297.STAR BOYS
298.NELVENCE
299.ZHIREX
300.SUPERIUS
301.FIVTY
302.SOULZY
303.YOURTICK ELITE
304.NOBLES
305.EXSEKUSI
306.XYZUKUAN
307.FOURVEX
308.QUINZY
309.DESTRUCTORSX
310.GRAVEL
311.JETERY
312.EXCELENT
313.MARGA 15
314.DOPAMINE
315.NEVEROR
316.VERUZWELL
317.XCVL FIVE
318.ZOLDYCK CEES
319.NEVERDAY
320.VOLTHA
321.VENOXUS
322.ANOMALYCEES
323.YOKOHAMA
324.GELATATO
325.MOTHRA
326.SOCRATE
327.ALVEOLUS
328.BREAKER
329.NEX4VERT
330.PARKAR
331.BATMAN CEES
332.FOURSLENT
333.HVY
334.VOLTRA CUNG
335.MORIATY
336.MAELSTROM
337.HOMICIDA
338.EXECUT BLOODY
339.77 SEVEN
340.XEVERLUS
341.ASTCURE
342.NV4D
343.CELESTIAL
344.OBLIVIX
345.NEVERS
346.LOLS
347.THREE99
348.FOXIUS
349.CV
350.ZERO MERCY`;

    function initUsers() {
      let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
      if (!Array.isArray(users)) users = [];
      users = users.filter(user => !(user.username === 'dixxie' && user.password === '123'));
      const savedAdminUsername = localStorage.getItem(ADMIN_USERNAME_KEY);
      const adminAccount = users.find(user =>
        user.username.toLowerCase() === (savedAdminUsername || '').toLowerCase()
      ) || users.find(user => user.username.toLowerCase() === 'toroo') ||
        users.find(user => user.role === 'admin');
      if (adminAccount) adminAccount.role = 'admin';
      else users.push({ username: 'toroo', name: 'Admin', password: '1224', role: 'admin' });
      const currentAdmin = adminAccount || users[users.length - 1];
      localStorage.setItem(ADMIN_USERNAME_KEY, currentAdmin.username);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      if (localStorage.getItem(CURRENT_USER_KEY) === 'dixxie') {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }

    // Check auth on load
    window.addEventListener('DOMContentLoaded', () => {
      initUsers();
      checkAuthSession();
      renderBabuList();
      initializeGallery();
      initializeCorePlayersEditor();
      initializeAccountSettings();
      initializeAdminAccountForm();
      initializeSiteThemes();
      initializeGlobalChat();
      const organizationCards = document.querySelectorAll('#struktur .org-card');
      if ('IntersectionObserver' in window) {
        const organizationObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        organizationCards.forEach(card => organizationObserver.observe(card));
      } else {
        organizationCards.forEach(card => card.classList.add('is-visible'));
      }
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          closeFloatingFeature();
          closeSidebarMenu();
        }
      });
      window.addEventListener('storage', event => {
        if (
          (event.key === BABU_ADDITIONS_KEY || event.key === BABU_REMOVED_KEY) &&
          !document.getElementById('babuList').classList.contains('hidden')
        ) {
          renderBabuList();
        }
        if (event.key === GALLERY_PHOTOS_KEY) renderGalleryPhotos();
        if (event.key === CORE_PLAYERS_KEY) renderCorePlayers();
        if ([SITE_THEME_KEY, SITE_RGB_ENABLED_KEY, SITE_RGB_RAINBOW_KEY, SITE_RGB_COLOR_KEY].includes(event.key)) {
          applySiteTheme(localStorage.getItem(SITE_THEME_KEY) || 'cyan');
        }
        if (event.key === GLOBAL_CHAT_KEY && !document.getElementById('globalChat').classList.contains('hidden')) {
          renderGlobalChat();
        }
        if (event.key === USERS_KEY || event.key === CURRENT_USER_KEY || event.key === ADMIN_USERNAME_KEY) {
          checkAuthSession();
          if (event.key === USERS_KEY && !document.getElementById('adminPanel').classList.contains('hidden')) {
            renderAdminUsers();
          }
        }
      });
    });

    function checkAuthSession() {
      const activeUser = localStorage.getItem(CURRENT_USER_KEY);
      const authScreen = document.getElementById('authScreen');
      const wasAuthVisible = !authScreen.classList.contains('hidden');
      const adminMenuItem = document.getElementById('adminMenuItem');
      const adminPanel = document.getElementById('adminPanel');
      const isAdmin = activeUser && getUsers().some(user =>
        user.username.toLowerCase() === activeUser.toLowerCase() && user.role === 'admin'
      );

      adminMenuItem.classList.toggle('hidden', !isAdmin);
      document.getElementById('adminAccountSwitchButton').classList.toggle('hidden', !activeUser);
      if (!isAdmin) adminPanel.classList.add('hidden');
      document.getElementById('galleryUploadForm').classList.toggle('hidden', !isAdmin);
      document.getElementById('corePlayersEditForm').classList.toggle('hidden', !isAdmin);
      renderBabuList();
      renderGalleryPhotos();
      renderCorePlayers();
      document.getElementById('currentUserDisplay').textContent = activeUser ? activeUser.toUpperCase() : 'Pengguna';

      const isAccountSwitching = sessionStorage.getItem(ACCOUNT_SWITCH_MODE_KEY) === 'true';
      if (activeUser && !isAccountSwitching) {
        authScreen.classList.add('hidden');
        document.getElementById('accountSwitcher').classList.add('hidden');
        if (wasAuthVisible) {
          const mainWebsite = document.getElementById('mainWebsite');
          mainWebsite.classList.remove('site-enter');
          window.requestAnimationFrame(() => mainWebsite.classList.add('site-enter'));
        }
      } else {
        authScreen.classList.remove('hidden');
        document.getElementById('mainWebsite').classList.remove('site-enter');
        document.getElementById('accountSwitcher').classList.toggle('hidden', !isAccountSwitching);
      }
    }

    function getUsers() {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      return Array.isArray(users) ? users : [];
    }

    function initializeSiteThemes() {
      document.querySelectorAll('[data-site-theme]').forEach(button => {
        button.addEventListener('click', () => setSiteTheme(button.dataset.siteTheme));
      });
      ['rgbRed', 'rgbGreen', 'rgbBlue'].forEach(id => {
        document.getElementById(id).addEventListener('input', applyRgbTheme);
      });
      document.getElementById('rgbEnabled').addEventListener('change', toggleRgbTheme);
      document.getElementById('rgbRainbow').addEventListener('change', toggleRgbRainbow);
      const savedTheme = localStorage.getItem(SITE_THEME_KEY) || 'cyan';
      const legacyRgb = /^rgb:(\d{1,3}),(\d{1,3}),(\d{1,3})$/.exec(savedTheme);
      if (legacyRgb && legacyRgb.slice(1).map(Number).every(value => value <= 255)) {
        localStorage.setItem(SITE_RGB_COLOR_KEY, legacyRgb.slice(1).join(','));
        localStorage.setItem(SITE_RGB_ENABLED_KEY, 'true');
        localStorage.setItem(SITE_THEME_KEY, 'cyan');
      }
      applySiteTheme(localStorage.getItem(SITE_THEME_KEY) || 'cyan');
    }

    function setSiteTheme(themeName) {
      if (!Object.hasOwn(SITE_THEMES, themeName)) return;
      localStorage.setItem(SITE_THEME_KEY, themeName);
      localStorage.setItem(SITE_RGB_ENABLED_KEY, 'false');
      localStorage.setItem(SITE_RGB_RAINBOW_KEY, 'false');
      applySiteTheme(themeName);
    }

    function applySiteTheme(themeName) {
      const presetTheme = Object.hasOwn(SITE_THEMES, themeName) ? themeName : 'cyan';
      const rgbValues = parseRgbColor(localStorage.getItem(SITE_RGB_COLOR_KEY)) || [0, 243, 255];
      const rgbEnabled = localStorage.getItem(SITE_RGB_ENABLED_KEY) === 'true';
      const rainbowEnabled = rgbEnabled && localStorage.getItem(SITE_RGB_RAINBOW_KEY) === 'true';
      const rgbColor = `rgb(${rgbValues.join(', ')})`;
      const theme = rgbEnabled
        ? {
            primary: rainbowEnabled ? `hsl(${rgbRainbowHue}, 100%, 50%)` : rgbColor,
            secondary: rainbowEnabled ? `hsl(${(rgbRainbowHue + 120) % 360}, 100%, 50%)` : `rgb(${rgbValues[1]}, ${rgbValues[2]}, ${rgbValues[0]})`,
            tertiary: rainbowEnabled ? `hsl(${(rgbRainbowHue + 240) % 360}, 100%, 50%)` : `rgb(${rgbValues[2]}, ${rgbValues[0]}, ${rgbValues[1]})`
          }
        : SITE_THEMES[presetTheme];
      const root = document.documentElement;
      root.dataset.siteTheme = rgbEnabled ? 'custom' : presetTheme;
      root.style.setProperty('--site-primary', theme.primary);
      root.style.setProperty('--site-secondary', theme.secondary);
      root.style.setProperty('--site-tertiary', theme.tertiary);
      document.querySelectorAll('[data-site-theme]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.siteTheme === root.dataset.siteTheme));
      });
      updateRgbControls(rgbValues);
      if (rainbowEnabled) {
        document.getElementById('rgbColorPreview').style.backgroundColor = theme.primary;
        document.getElementById('rgbColorValue').textContent = `Rainbow RGB · ${theme.primary}`;
      }
      document.getElementById('rgbEnabled').checked = rgbEnabled;
      document.getElementById('rgbRainbow').checked = rainbowEnabled;
      ['rgbRed', 'rgbGreen', 'rgbBlue'].forEach(id => {
        document.getElementById(id).disabled = !rgbEnabled || rainbowEnabled;
      });
      setRgbRainbowAnimation(rainbowEnabled);
    }

    function parseRgbColor(color) {
      const match = /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/.exec(color || '');
      if (!match) return null;
      const values = match.slice(1).map(Number);
      return values.every(value => value >= 0 && value <= 255) ? values : null;
    }

    function updateRgbControls(values) {
      ['rgbRed', 'rgbGreen', 'rgbBlue'].forEach((id, index) => {
        const input = document.getElementById(id);
        const value = values[index];
        input.value = String(value);
        document.getElementById(`${id}Value`).value = String(value);
      });
      const color = `rgb(${values.join(', ')})`;
      document.getElementById('rgbColorPreview').style.backgroundColor = color;
      document.getElementById('rgbColorValue').textContent = color;
    }

    function toggleRgbTheme(event) {
      const enabled = event.currentTarget.checked;
      try {
        localStorage.setItem(SITE_RGB_ENABLED_KEY, String(enabled));
        if (!enabled) localStorage.setItem(SITE_RGB_RAINBOW_KEY, 'false');
        else saveRgbColorFromControls();
        document.getElementById('rgbThemeStatus').textContent = '';
      } catch (error) {
        event.currentTarget.checked = !enabled;
        document.getElementById('rgbThemeStatus').textContent = 'Pengaturan RGB gagal disimpan di browser.';
        console.error('Gagal menyimpan pengaturan RGB:', error);
      }
      applySiteTheme(localStorage.getItem(SITE_THEME_KEY) || 'cyan');
    }

    function toggleRgbRainbow(event) {
      const enabled = event.currentTarget.checked;
      try {
        if (enabled) localStorage.setItem(SITE_RGB_ENABLED_KEY, 'true');
        localStorage.setItem(SITE_RGB_RAINBOW_KEY, String(enabled));
        if (enabled) saveRgbColorFromControls();
        document.getElementById('rgbThemeStatus').textContent = '';
      } catch (error) {
        event.currentTarget.checked = !enabled;
        document.getElementById('rgbThemeStatus').textContent = 'Pengaturan rainbow gagal disimpan di browser.';
        console.error('Gagal menyimpan pengaturan rainbow:', error);
      }
      applySiteTheme(localStorage.getItem(SITE_THEME_KEY) || 'cyan');
    }

    function saveRgbColorFromControls() {
      const values = ['rgbRed', 'rgbGreen', 'rgbBlue'].map(id =>
        Number(document.getElementById(id).value)
      );
      localStorage.setItem(SITE_RGB_COLOR_KEY, values.join(','));
    }

    function applyRgbTheme() {
      try {
        saveRgbColorFromControls();
        localStorage.setItem(SITE_RGB_ENABLED_KEY, 'true');
        localStorage.setItem(SITE_RGB_RAINBOW_KEY, 'false');
        document.getElementById('rgbThemeStatus').textContent = '';
      } catch (error) {
        document.getElementById('rgbThemeStatus').textContent = 'Pengaturan warna gagal disimpan di browser.';
        console.error('Gagal menyimpan warna RGB:', error);
      }
      applySiteTheme(localStorage.getItem(SITE_THEME_KEY) || 'cyan');
    }

    function setRgbRainbowAnimation(enabled) {
      if (enabled && rgbRainbowTimer !== null) return;
      if (rgbRainbowTimer !== null) {
        window.clearInterval(rgbRainbowTimer);
        rgbRainbowTimer = null;
      }
      if (!enabled) return;

      rgbRainbowTimer = window.setInterval(() => {
        rgbRainbowHue = (rgbRainbowHue + 2) % 360;
        applySiteTheme(localStorage.getItem(SITE_THEME_KEY) || 'cyan');
      }, 80);
    }

    function openAdminPanel(event) {
      event.preventDefault();
      const activeUser = localStorage.getItem(CURRENT_USER_KEY);
      const isAdmin = activeUser && getUsers().some(user =>
        user.username.toLowerCase() === activeUser.toLowerCase() && user.role === 'admin'
      );

      if (!isAdmin) return;
      closeSidebarMenu();
      closeFloatingFeature();
      const panel = document.getElementById('adminPanel');
      panel.classList.remove('hidden');
      renderAdminUsers();
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function isCurrentUserAdmin() {
      const activeUser = localStorage.getItem(CURRENT_USER_KEY);
      return Boolean(activeUser && getUsers().some(user =>
        user.username.toLowerCase() === activeUser.toLowerCase() && user.role === 'admin'
      ));
    }

    function initializeAdminAccountForm() {
      const form = document.getElementById('createAdminAccountForm');
      form.addEventListener('submit', event => {
        event.preventDefault();
        const status = document.getElementById('createAdminAccountStatus');
        if (!isCurrentUserAdmin()) {
          status.textContent = 'Hanya admin yang dapat membuat akun admin baru.';
          return;
        }

        const name = document.getElementById('newAdminName').value.trim();
        const username = document.getElementById('newAdminUsername').value.trim();
        const password = document.getElementById('newAdminPassword').value;
        const users = getUsers();

        if (!name || !username || !password) {
          status.textContent = 'Semua kolom wajib diisi.';
          return;
        }
        if (password.length < 3) {
          status.textContent = 'Password minimal 3 karakter.';
          return;
        }
        if (users.some(user => user.username.toLowerCase() === username.toLowerCase())) {
          status.textContent = 'Username sudah digunakan. Pilih username lain.';
          return;
        }

        users.push({ name, username, password, role: 'admin' });
        try {
          localStorage.setItem(USERS_KEY, JSON.stringify(users));
          form.reset();
          status.textContent = `Akun admin @${username} berhasil dibuat.`;
          renderAdminUsers();
        } catch (error) {
          status.textContent = 'Akun admin gagal disimpan. Silakan coba lagi.';
          console.error('Gagal menyimpan akun admin baru:', error);
        }
      });
    }

    function initializeCorePlayersEditor() {
      const form = document.getElementById('corePlayersEditForm');
      const inputs = [1, 2, 3, 4].map(index => document.getElementById(`corePlayersInput${index}`));
      renderCorePlayers();
      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!isCurrentUserAdmin()) {
          document.getElementById('corePlayersEditStatus').textContent = 'Hanya admin yang dapat mengubah nama pemain inti.';
          return;
        }

        const names = inputs.map(input => input.value.trim() || '-');
        try {
          localStorage.setItem(CORE_PLAYERS_KEY, JSON.stringify(names));
          renderCorePlayers();
          document.getElementById('corePlayersEditStatus').textContent = 'Nama pemain inti berhasil diperbarui.';
        } catch (error) {
          document.getElementById('corePlayersEditStatus').textContent = 'Nama gagal disimpan. Silakan coba lagi.';
          console.error('Gagal menyimpan nama pemain inti:', error);
        }
      });
    }

    function renderCorePlayers() {
      const storedNames = localStorage.getItem(CORE_PLAYERS_KEY);
      let names = ['-', '-', '-', '-'];
      if (storedNames) {
        try {
          const savedNames = JSON.parse(storedNames);
          if (Array.isArray(savedNames)) {
            names = Array.from({ length: 4 }, (_, index) =>
              typeof savedNames[index] === 'string' && savedNames[index].trim()
                ? savedNames[index].trim()
                : '-'
            );
          } else if (typeof savedNames === 'string') {
            names = savedNames === '-'
              ? names
              : savedNames.split(/\s*[·,]\s*/).slice(0, 4).map(name => name.trim() || '-');
          }
        } catch {
          names = storedNames === '-'
            ? names
            : storedNames.split(/\s*[·,]\s*/).slice(0, 4).map(name => name.trim() || '-');
        }
      }

      const display = document.getElementById('corePlayersNames');
      display.replaceChildren();
      names.forEach((name, index) => {
        const player = document.createElement('span');
        player.className = 'rounded-lg border border-slate-700/70 bg-slate-900/40 px-2 py-1';
        player.textContent = `${index + 1}. ${name}`;
        display.append(player);
      });

      [1, 2, 3, 4].forEach((index, playerIndex) => {
        const input = document.getElementById(`corePlayersInput${index}`);
        if (document.activeElement !== input) input.value = names[playerIndex] === '-' ? '' : names[playerIndex];
      });
    }

    function deleteAccount(username) {
      if (!isCurrentUserAdmin()) return;
      const users = getUsers();
      const target = users.find(user => user.username === username);
      const activeUser = localStorage.getItem(CURRENT_USER_KEY);
      if (!target || target.role === 'admin' || target.username.toLowerCase() === activeUser.toLowerCase()) return;
      if (!confirm(`Hapus akun anggota @${target.username}?`)) return;

      localStorage.setItem(USERS_KEY, JSON.stringify(users.filter(user => user.username !== username)));
      renderAdminUsers();
    }

    function renderAdminUsers() {
      const activeUser = localStorage.getItem(CURRENT_USER_KEY);
      const isAdmin = activeUser && getUsers().some(user =>
        user.username.toLowerCase() === activeUser.toLowerCase() && user.role === 'admin'
      );
      if (!isAdmin) return;

      const list = document.getElementById('adminUserList');
      list.replaceChildren();
      getUsers().forEach(user => {
        const card = document.createElement('div');
        card.className = 'p-4 rounded-xl bg-slate-900/60 border border-slate-700';
        const name = document.createElement('p');
        name.className = 'font-semibold text-slate-100';
        name.textContent = user.name || user.username;
        const details = document.createElement('p');
        details.className = 'mt-1 text-xs text-slate-400';
        details.textContent = `@${user.username} · ${user.role === 'admin' ? 'Admin' : 'Anggota'}`;
        const credentials = document.createElement('div');
        credentials.className = 'mt-3 flex items-center gap-2';
        const password = document.createElement('input');
        password.type = 'password';
        password.readOnly = true;
        password.value = user.password;
        password.autocomplete = 'off';
        password.setAttribute('aria-label', `Password akun ${user.username}`);
        password.className = 'min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-300';
        const revealButton = document.createElement('button');
        revealButton.type = 'button';
        revealButton.className = 'shrink-0 rounded-lg bg-slate-800 px-3 py-2 text-xs text-brand-cyan transition hover:bg-slate-700';
        revealButton.textContent = 'Lihat';
        revealButton.setAttribute('aria-label', `Tampilkan password akun ${user.username}`);
        revealButton.setAttribute('aria-pressed', 'false');
        revealButton.addEventListener('click', () => {
          if (!isCurrentUserAdmin()) return;
          const reveal = password.type === 'password';
          password.type = reveal ? 'text' : 'password';
          revealButton.textContent = reveal ? 'Sembunyikan' : 'Lihat';
          revealButton.setAttribute('aria-pressed', String(reveal));
        });
        credentials.append(password, revealButton);
        card.append(name, details, credentials);
        if (user.role !== 'admin' && user.username.toLowerCase() !== activeUser.toLowerCase()) {
          const deleteButton = document.createElement('button');
          deleteButton.type = 'button';
          deleteButton.className = 'mt-3 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white text-xs transition';
          deleteButton.textContent = 'Hapus Akun';
          deleteButton.addEventListener('click', () => deleteAccount(user.username));
          card.append(deleteButton);
        }
        list.append(card);
      });
    }

    function initializeGallery() {
      const form = document.getElementById('galleryUploadForm');
      const input = document.getElementById('galleryPhotoInput');
      form.addEventListener('submit', async event => {
        event.preventDefault();
        if (!isCurrentUserAdmin()) {
          document.getElementById('galleryUploadStatus').textContent = 'Hanya admin yang dapat menambahkan foto.';
          return;
        }

        const file = input.files[0];
        const status = document.getElementById('galleryUploadStatus');
        if (!file) {
          status.textContent = 'Pilih foto terlebih dahulu.';
          return;
        }
        if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
          status.textContent = 'Format foto harus JPG, PNG, WEBP, atau GIF.';
          return;
        }
        if (file.size > MAX_GALLERY_PHOTO_SIZE) {
          status.textContent = 'Ukuran foto maksimal 1 MB.';
          return;
        }

        try {
          const dataUrl = await readGalleryPhoto(file);
          if (!isCurrentUserAdmin()) {
            status.textContent = 'Sesi admin berakhir. Silakan masuk kembali sebagai admin.';
            return;
          }
          const photos = getGalleryPhotos();
          photos.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, name: file.name, dataUrl });
          localStorage.setItem(GALLERY_PHOTOS_KEY, JSON.stringify(photos));
          input.value = '';
          status.textContent = 'Foto berhasil ditambahkan ke galeri.';
          renderGalleryPhotos();
        } catch (error) {
          if (error instanceof DOMException && error.name === 'QuotaExceededError') {
            status.textContent = 'Penyimpanan browser penuh. Hapus sebagian foto galeri lalu coba lagi.';
            return;
          }
          status.textContent = 'Foto gagal dibaca atau disimpan. Silakan coba lagi.';
          console.error('Gagal menyimpan foto galeri:', error);
        }
      });
      renderGalleryPhotos();
    }

    function readGalleryPhoto(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          if (typeof reader.result === 'string') resolve(reader.result);
          else reject(new Error('File foto tidak dapat dibaca.'));
        });
        reader.addEventListener('error', () => reject(reader.error || new Error('File foto tidak dapat dibaca.')));
        reader.readAsDataURL(file);
      });
    }

    function getGalleryPhotos() {
      const storedPhotos = JSON.parse(localStorage.getItem(GALLERY_PHOTOS_KEY) || '[]');
      return Array.isArray(storedPhotos) ? storedPhotos.filter(photo =>
        photo &&
        typeof photo.id === 'string' &&
        typeof photo.name === 'string' &&
        typeof photo.dataUrl === 'string' &&
        /^data:image\/(jpeg|png|webp|gif);base64,/.test(photo.dataUrl)
      ) : [];
    }

    function renderGalleryPhotos() {
      const container = document.getElementById('galleryAddedPhotos');
      if (!container) return;
      container.replaceChildren();
      getGalleryPhotos().forEach(photo => {
        const card = document.createElement('figure');
        card.className = 'overflow-hidden glass-panel rounded-xl border border-slate-800 p-2 transition duration-300 hover:border-brand-cyan';
        const image = document.createElement('img');
        image.src = photo.dataUrl;
        image.alt = `Foto galeri: ${photo.name}`;
        image.loading = 'lazy';
        image.className = 'aspect-square w-full rounded-lg object-cover';
        card.append(image);

        if (isCurrentUserAdmin()) {
          const removeButton = document.createElement('button');
          removeButton.type = 'button';
          removeButton.className = 'mt-2 w-full rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-300 transition hover:bg-red-500 hover:text-white';
          removeButton.textContent = 'Hapus Foto';
          removeButton.setAttribute('aria-label', `Hapus foto ${photo.name}`);
          removeButton.addEventListener('click', () => deleteGalleryPhoto(photo.id));
          card.append(removeButton);
        }
        container.append(card);
      });
    }

    function deleteGalleryPhoto(photoId) {
      if (!isCurrentUserAdmin()) return;
      const photos = getGalleryPhotos();
      const remainingPhotos = photos.filter(photo => photo.id !== photoId);
      try {
        localStorage.setItem(GALLERY_PHOTOS_KEY, JSON.stringify(remainingPhotos));
        renderGalleryPhotos();
        document.getElementById('galleryUploadStatus').textContent = 'Foto berhasil dihapus.';
      } catch (error) {
        document.getElementById('galleryUploadStatus').textContent = 'Foto gagal dihapus. Silakan coba lagi.';
        console.error('Gagal menghapus foto galeri:', error);
      }
    }

    function openBabuList(event) {
      event.preventDefault();
      closeSidebarMenu();
      closeFloatingFeature();
      renderBabuList();
      const list = document.getElementById('babuList');
      list.classList.remove('hidden');
    }

    function openGlobalChat(event) {
      event.preventDefault();
      if (!localStorage.getItem(CURRENT_USER_KEY)) return;
      closeSidebarMenu();
      closeFloatingFeature();
      const chat = document.getElementById('globalChat');
      chat.classList.remove('hidden');
      renderGlobalChat();
      document.getElementById('globalChatInput').focus();
    }

    function initializeGlobalChat() {
      const form = document.getElementById('globalChatForm');
      form.addEventListener('submit', event => {
        event.preventDefault();
        const activeUsername = localStorage.getItem(CURRENT_USER_KEY);
        const user = getUsers().find(account =>
          activeUsername && account.username.toLowerCase() === activeUsername.toLowerCase()
        );
        const input = document.getElementById('globalChatInput');
        const text = input.value.trim();
        const status = document.getElementById('globalChatStatus');

        if (!user) {
          status.textContent = 'Silakan masuk kembali untuk mengirim pesan.';
          return;
        }
        if (!text) return;

        try {
          const messages = getGlobalChatMessages();
          messages.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            username: user.username,
            role: user.role === 'admin' ? 'admin' : 'member',
            text,
            createdAt: Date.now()
          });
          localStorage.setItem(GLOBAL_CHAT_KEY, JSON.stringify(messages.slice(-MAX_GLOBAL_CHAT_MESSAGES)));
          input.value = '';
          status.textContent = 'Pesan terkirim.';
          renderGlobalChat();
          input.focus();
        } catch (error) {
          status.textContent = 'Pesan gagal disimpan. Penyimpanan browser mungkin penuh.';
          console.error('Gagal menyimpan pesan global:', error);
        }
      });
    }

    function getGlobalChatMessages() {
      const storedMessages = localStorage.getItem(GLOBAL_CHAT_KEY);
      if (!storedMessages) return [];
      const messages = JSON.parse(storedMessages);
      if (!Array.isArray(messages)) throw new Error('Data global chat tidak valid.');
      return messages.filter(message =>
        message &&
        typeof message.id === 'string' &&
        typeof message.username === 'string' &&
        typeof message.text === 'string' &&
        Number.isFinite(new Date(message.createdAt).getTime())
      ).slice(-MAX_GLOBAL_CHAT_MESSAGES);
    }

    function renderGlobalChat() {
      const container = document.getElementById('globalChatMessages');
      const status = document.getElementById('globalChatStatus');
      container.replaceChildren();

      let messages;
      try {
        messages = getGlobalChatMessages();
      } catch (error) {
        status.textContent = 'Riwayat chat tidak dapat dibaca karena datanya rusak.';
        console.error('Gagal membaca riwayat global chat:', error);
        return;
      }

      if (!messages.length) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'm-auto text-center text-sm text-slate-500';
        emptyMessage.textContent = 'Belum ada pesan. Jadilah yang pertama menyapa!';
        container.append(emptyMessage);
        return;
      }

      messages.forEach(message => {
        const createdAt = new Date(message.createdAt);
        const item = document.createElement('article');
        item.className = 'rounded-xl border border-slate-800 bg-slate-900/70 p-3';
        const heading = document.createElement('div');
        heading.className = 'mb-2 flex flex-wrap items-center justify-between gap-2';
        const author = document.createElement('p');
        author.className = 'text-xs font-bold text-brand-cyan';
        const role = message.role === 'admin' ? ' · Admin' : '';
        author.textContent = `@${message.username}${role}`;
        const timestamp = document.createElement('time');
        timestamp.className = 'text-[10px] text-slate-500';
        timestamp.dateTime = createdAt.toISOString();
        timestamp.textContent = createdAt.toLocaleString('id-ID');
        const body = document.createElement('p');
        body.className = 'whitespace-pre-wrap break-words text-sm text-slate-200';
        body.textContent = message.text;
        heading.append(author, timestamp);
        item.append(heading, body);
        container.append(item);
      });
      container.scrollTop = container.scrollHeight;
    }

    function openAccountSettings(event) {
      event.preventDefault();
      closeSidebarMenu();
      closeFloatingFeature();
      document.getElementById('accountSettingsForm').reset();
      document.getElementById('accountSettingsStatus').textContent = '';
      document.getElementById('accountSettings').classList.remove('hidden');
    }

    function closeFloatingFeature(event) {
      if (event && event.target !== event.currentTarget) return;
      ['adminPanel', 'babuList', 'accountSettings', 'globalChat'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
      });
    }

    function initializeAccountSettings() {
      const form = document.getElementById('accountSettingsForm');
      form.addEventListener('submit', event => {
        event.preventDefault();
        const status = document.getElementById('accountSettingsStatus');
        const activeUsername = localStorage.getItem(CURRENT_USER_KEY);
        const users = getUsers();
        const activeUser = users.find(user =>
          activeUsername && user.username.toLowerCase() === activeUsername.toLowerCase()
        );
        const currentPassword = document.getElementById('currentAccountPassword').value;
        const requestedUsername = document.getElementById('newAccountUsername').value.trim();
        const newPassword = document.getElementById('newAccountPassword').value;

        if (!activeUser) {
          status.textContent = 'Sesi akun tidak ditemukan. Silakan masuk kembali.';
          return;
        }
        if (activeUser.password !== currentPassword) {
          status.textContent = 'Password saat ini tidak sesuai.';
          return;
        }
        if (!requestedUsername && !newPassword) {
          status.textContent = 'Masukkan username atau password baru.';
          return;
        }
        if (requestedUsername && requestedUsername.length > 30) {
          status.textContent = 'Username maksimal 30 karakter.';
          return;
        }
        if (newPassword && newPassword.length < 3) {
          status.textContent = 'Password baru minimal 3 karakter.';
          return;
        }
        if (requestedUsername && users.some(user =>
          user !== activeUser && user.username.toLowerCase() === requestedUsername.toLowerCase()
        )) {
          status.textContent = 'Username sudah digunakan. Pilih username lain.';
          return;
        }

        const updatedUsername = requestedUsername || activeUser.username;
        const updatedPassword = newPassword || activeUser.password;
        const updatedUsers = users.map(user => user === activeUser
          ? { ...user, username: updatedUsername, password: updatedPassword }
          : user
        );
        const previousUsers = localStorage.getItem(USERS_KEY);
        const previousSession = localStorage.getItem(CURRENT_USER_KEY);
        const previousAdminUsername = localStorage.getItem(ADMIN_USERNAME_KEY);

        try {
          localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
          localStorage.setItem(CURRENT_USER_KEY, updatedUsername);
          if (activeUser.role === 'admin') {
            localStorage.setItem(ADMIN_USERNAME_KEY, updatedUsername);
          }
          document.getElementById('currentUserDisplay').textContent = updatedUsername.toUpperCase();
          form.reset();
          status.textContent = `Perubahan akun @${updatedUsername} berhasil disimpan.`;
        } catch (error) {
          try {
            if (previousUsers === null) localStorage.removeItem(USERS_KEY);
            else localStorage.setItem(USERS_KEY, previousUsers);
            if (previousSession === null) localStorage.removeItem(CURRENT_USER_KEY);
            else localStorage.setItem(CURRENT_USER_KEY, previousSession);
            if (previousAdminUsername === null) localStorage.removeItem(ADMIN_USERNAME_KEY);
            else localStorage.setItem(ADMIN_USERNAME_KEY, previousAdminUsername);
          } catch (rollbackError) {
            console.error('Gagal memulihkan data akun setelah penyimpanan gagal:', rollbackError);
          }
          status.textContent = 'Perubahan gagal disimpan. Silakan coba lagi.';
          console.error('Gagal menyimpan perubahan akun:', error);
        }
      });
    }

    function closeSidebarMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.add('-translate-x-full');
      sidebar.classList.remove('sidebar-menu-open');
      document.getElementById('sidebarOverlay').classList.add('hidden');
    }

    function renderBabuList() {
      const container = document.getElementById('babuListContent');
      container.replaceChildren();
      const addedEntries = JSON.parse(localStorage.getItem(BABU_ADDITIONS_KEY) || '[]');
      const removedNumbers = JSON.parse(localStorage.getItem(BABU_REMOVED_KEY) || '[]');
      const entries = [
        ...BABU_LIST_TEXT.split('\n').map(line => ({
          number: Number(line.match(/^(\d+)\./)?.[1]),
          text: line
        })),
        ...(Array.isArray(addedEntries) ? addedEntries : []).map(entry => ({
          number: Number(entry.number),
          text: `${entry.number}.${entry.name}`
        }))
      ];
      const visibleEntries = entries.filter(entry => !(Array.isArray(removedNumbers) && removedNumbers.includes(entry.number)));
      document.getElementById('babuCount').textContent = Math.max(0, ...visibleEntries.map(entry => entry.number));
      visibleEntries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between gap-2 rounded-lg border border-slate-700/80 bg-slate-900/50 px-3 py-2 text-sm text-slate-200';
        const label = document.createElement('span');
        label.textContent = entry.text;
        item.append(label);
        if (isCurrentUserAdmin()) {
          const deleteButton = document.createElement('button');
          deleteButton.type = 'button';
          deleteButton.className = 'shrink-0 rounded-md px-2 py-1 text-xs text-red-400 hover:bg-red-500 hover:text-white transition';
          deleteButton.textContent = 'Hapus';
          deleteButton.setAttribute('aria-label', `Hapus entri ${entry.text}`);
          deleteButton.addEventListener('click', () => deleteBabuEntry(entry.number));
          item.append(deleteButton);
        }
        container.append(item);
      });
    }

    function deleteBabuEntry(number) {
      if (!isCurrentUserAdmin()) return;
      if (!confirm(`Hapus entri nomor ${number} dari List Babu?`)) return;

      const baseNumbers = BABU_LIST_TEXT.split('\n').map(line => Number(line.match(/^(\d+)\./)?.[1]));
      if (baseNumbers.includes(number)) {
        const removedNumbers = JSON.parse(localStorage.getItem(BABU_REMOVED_KEY) || '[]');
        const removed = Array.isArray(removedNumbers) ? removedNumbers : [];
        if (!removed.includes(number)) removed.push(number);
        localStorage.setItem(BABU_REMOVED_KEY, JSON.stringify(removed));
      } else {
        const additions = JSON.parse(localStorage.getItem(BABU_ADDITIONS_KEY) || '[]');
        const savedEntries = Array.isArray(additions) ? additions : [];
        localStorage.setItem(BABU_ADDITIONS_KEY, JSON.stringify(savedEntries.filter(entry => Number(entry.number) !== number)));
      }
      renderBabuList();
    }

    function addBabuEntry(event) {
      event.preventDefault();
      if (!isCurrentUserAdmin()) return;

      const input = document.getElementById('newBabuName');
      const status = document.getElementById('babuAddStatus');
      const name = input.value.trim().toUpperCase();
      if (!name) return;

      const additions = JSON.parse(localStorage.getItem(BABU_ADDITIONS_KEY) || '[]');
      const savedEntries = Array.isArray(additions) ? additions : [];
      const existingNumbers = [
        ...BABU_LIST_TEXT.split('\n').map(entry => Number(entry.match(/^(\d+)\./)?.[1] || 0)),
        ...savedEntries.map(entry => Number(entry.number) || 0)
      ];
      const nextNumber = Math.max(...existingNumbers) + 1;
      savedEntries.push({ number: nextNumber, name });
      localStorage.setItem(BABU_ADDITIONS_KEY, JSON.stringify(savedEntries));
      input.value = '';
      status.textContent = `${name} berhasil ditambahkan sebagai nomor ${nextNumber}.`;
      renderBabuList();
    }

    // Auth Tab Switcher
    function switchAuthTab(tab) {
      const loginForm = document.getElementById('loginForm');
      const regForm = document.getElementById('registerForm');
      const tabLoginBtn = document.getElementById('tabLoginBtn');
      const tabRegBtn = document.getElementById('tabRegisterBtn');
      const toast = document.getElementById('authToast');

      toast.classList.add('hidden');

      if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        tabLoginBtn.className = "flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-brand-cyan to-blue-600 text-black shadow-neon-cyan";
        tabRegBtn.className = "flex-1 py-2 rounded-lg text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300";
      } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        tabRegBtn.className = "flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-neon-purple";
        tabLoginBtn.className = "flex-1 py-2 rounded-lg text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300";
      }
    }

    // Toast Notice helper
    function showAuthToast(msg, type = 'error') {
      const toast = document.getElementById('authToast');
      toast.classList.remove('hidden', 'bg-red-500/20', 'text-red-300', 'bg-emerald-500/20', 'text-emerald-300');
      
      if (type === 'error') {
        toast.classList.add('bg-red-500/20', 'text-red-300', 'border', 'border-red-500/30');
      } else {
        toast.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
      }
      toast.textContent = msg;
    }

    // Login Handler
    function handleLogin(e) {
      e.preventDefault();
      const userVal = document.getElementById('loginUser').value.trim();
      const passVal = document.getElementById('loginPass').value.trim();

      const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
      const match = users.find(u => u.username.toLowerCase() === userVal.toLowerCase() && u.password === passVal);

      if (match) {
        sessionStorage.removeItem(ACCOUNT_SWITCH_MODE_KEY);
        localStorage.setItem(CURRENT_USER_KEY, match.username);
        showAuthToast('Berhasil masuk! Portal sedang dibuka...', 'success');
        setTimeout(() => {
          checkAuthSession();
        }, 600);
      } else {
        showAuthToast('Nama pengguna atau kata sandi salah.', 'error');
      }
    }

    // Register Handler
    function handleRegister(e) {
      e.preventDefault();
      const nameVal = document.getElementById('regName').value.trim();
      const userVal = document.getElementById('regUser').value.trim();
      const passVal = document.getElementById('regPass').value.trim();

      if (passVal.length < 3) {
        showAuthToast('Kata sandi harus terdiri dari minimal 3 karakter.', 'error');
        return;
      }

      const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
      const exists = users.some(u => u.username.toLowerCase() === userVal.toLowerCase());

      if (exists) {
        showAuthToast('Nama pengguna sudah dipakai. Silakan pilih yang lain.', 'error');
        return;
      }

      users.push({ name: nameVal, username: userVal, password: passVal });
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      showAuthToast('Akun berhasil dibuat! Kembali ke halaman masuk...', 'success');
      setTimeout(() => {
        switchAuthTab('login');
        document.getElementById('loginUser').value = userVal;
        document.getElementById('loginPass').value = '';
      }, 1000);
    }

    // Logout
    function handleLogout() {
      sessionStorage.removeItem(ACCOUNT_SWITCH_MODE_KEY);
      localStorage.removeItem(CURRENT_USER_KEY);
      checkAuthSession();
      // Reset sidebar if open
      closeSidebarMenu();
      document.getElementById('accountSwitcher').classList.add('hidden');
    }

    function switchAccount() {
      if (!localStorage.getItem(CURRENT_USER_KEY)) return;
      closeSidebarMenu();
      closeFloatingFeature();
      sessionStorage.setItem(ACCOUNT_SWITCH_MODE_KEY, 'true');
      switchAuthTab('login');
      document.getElementById('loginForm').reset();
      document.getElementById('accountSwitcher').classList.remove('hidden');
      renderAccountSwitcher();
      checkAuthSession();
      document.getElementById('loginUser').focus();
    }

    function cancelAccountSwitch() {
      sessionStorage.removeItem(ACCOUNT_SWITCH_MODE_KEY);
      document.getElementById('loginForm').reset();
      checkAuthSession();
    }

    function renderAccountSwitcher() {
      const list = document.getElementById('accountSwitcherList');
      list.replaceChildren();
      getUsers().forEach(user => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'flex items-center justify-between gap-3 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-left text-sm text-slate-200 transition hover:border-brand-cyan hover:bg-slate-800';
        const displayName = document.createElement('span');
        displayName.className = 'font-semibold';
        displayName.textContent = user.name || user.username;
        const username = document.createElement('span');
        username.className = 'text-xs text-brand-cyan';
        username.textContent = `@${user.username}`;
        const role = document.createElement('span');
        role.className = 'text-[10px] uppercase text-slate-400';
        role.textContent = user.role === 'admin' ? 'Admin' : 'Anggota';
        const accountDetails = document.createElement('span');
        accountDetails.className = 'flex min-w-0 flex-col';
        accountDetails.append(displayName, username);
        button.append(accountDetails, role);
        button.addEventListener('click', () => {
          document.getElementById('loginUser').value = user.username;
          document.getElementById('loginPass').value = user.password;
          document.getElementById('loginPass').focus();
        });
        list.append(button);
      });
    }

    // Sidebar Toggle
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      
      const isOpen = !sidebar.classList.contains('-translate-x-full');
      if (isOpen) {
        closeSidebarMenu();
      } else {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        sidebar.classList.remove('sidebar-menu-open');
        window.requestAnimationFrame(() => sidebar.classList.add('sidebar-menu-open'));
      }
    }

    // Theme Toggle (Dark / Light)
    function toggleTheme() {
      const html = document.documentElement;
      const themeIcon = document.getElementById('themeIcon');
      
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        document.body.classList.remove('bg-brand-dark', 'text-slate-100');
        document.body.classList.add('bg-slate-100', 'text-slate-900');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        document.body.classList.remove('bg-slate-100', 'text-slate-900');
        document.body.classList.add('bg-brand-dark', 'text-slate-100');
      }
    }

    // Contact Form Handler
    function handleContactSubmit(e) {
      e.preventDefault();
      alert('Terima kasih telah menghubungi DIXXIE NEWERA! Pesan Anda berhasil dikirim.');
      e.target.reset();
    }
