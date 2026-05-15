(function () {
  var root = document.getElementById('gdash-root');
  if (!root) return;

  root.innerHTML = `
    <div class="gdash__shell">
      <header class="gdash__header" aria-label="Верхнее меню">
        <div class="gdash__brand">
          <div class="gdash__brand-mark">G</div>
          <div class="gdash__brand-text">
            <div class="gdash__brand-title">Game Dashboard</div>
            <div class="gdash__brand-subtitle">CS:GO / CS2 Major</div>
          </div>
        </div>

        <nav class="gdash__nav">
          <button class="gdash__nav-btn is-active" type="button" data-page="tournaments">Турниры</button>
          <button class="gdash__nav-btn" type="button" data-page="teams">Команды</button>
        </nav>
      </header>

      <main class="gdash__main">
        <section class="gdash__page is-active" data-page-content="tournaments">
          <div class="gdash__topbar">
            <div>
              <div class="gdash__eyebrow">Панель управления</div>
              <h2 class="gdash__title">Турнирная сетка</h2>
            </div>

            <div class="gdash__controls">
              <label class="gdash__control">
                <span class="gdash__control-label">Год</span>
                <select class="gdash__select" id="gdash-year-select"></select>
              </label>

              <label class="gdash__control">
                <span class="gdash__control-label">Турнир</span>
                <select class="gdash__select" id="gdash-tournament-select"></select>
              </label>
            </div>
          </div>

          <div class="gdash__tournament-head">
            <div>
              <div class="gdash__eyebrow" id="gdash-version"></div>
              <h1 class="gdash__tournament-title" id="gdash-tournament-title"></h1>
            </div>
            <div class="gdash__winner-card">
              <span class="gdash__muted">Победитель</span>
              <strong id="gdash-winner-name"></strong>
            </div>
          </div>

          <div class="gdash__info-grid" id="gdash-info-grid"></div>

          <div class="gdash__section-head">
            <h3 class="gdash__section-title">Основная сетка</h3>
            <p class="gdash__section-text">В файле есть победитель, второе место и полуфиналисты. Полная 1/4 сетка и точные счета в исходнике не указаны, поэтому недостающие пары отмечены как заглушки.</p>
          </div>

          <div class="gdash__bracket-wrap" id="gdash-bracket-wrap">
            <div class="gdash__bracket" id="gdash-bracket"></div>
          </div>

          <div class="gdash__third-place" id="gdash-third-place"></div>
        </section>

        <section class="gdash__page" data-page-content="teams">
          <div class="gdash__topbar">
            <div>
              <div class="gdash__eyebrow">Раздел команд</div>
              <h2 class="gdash__title">Команды турниров</h2>
            </div>
          </div>

          <div class="gdash__teams-grid" id="gdash-teams-grid"></div>
        </section>
      </main>
    </div>
  `;

  var tournaments = [
    { version:'CS:GO', year:'2013', title:'DreamHack Winter 2013', date:'28 — 30 ноября 2013', organizer:'DreamHack', prize:'250 000 $', mvp:'JW', city:'Йёнчёпинг', cityFlag:'SE', winner:{name:'Fnatic', flag:'SE'}, second:{name:'Ninjas in Pyjamas', flag:'SE'}, semi:[{name:'VeryGames', flag:'FR'}, {name:'compLexity Gaming', flag:'US'}] },

    { version:'CS:GO', year:'2014', title:'EMS One Katowice 2014', date:'13 — 16 марта 2014', organizer:'ESL', prize:'250 000 $', mvp:'pashabiceps', city:'Катовице', cityFlag:'PL', winner:{name:'Virtus.pro', flag:'PL'}, second:{name:'Ninjas in Pyjamas', flag:'SE'}, semi:[{name:'Team Dignitas', flag:'DK'}, {name:'LGB eSports', flag:'SE'}] },
    { version:'CS:GO', year:'2014', title:'ESL One Cologne 2014', date:'14 — 17 августа 2014', organizer:'ESL', prize:'250 000 $', mvp:'Friberg', city:'Кёльн', cityFlag:'DE', winner:{name:'Ninjas in Pyjamas', flag:'SE'}, second:{name:'Fnatic', flag:'SE'}, semi:[{name:'Team Dignitas', flag:'DK'}, {name:'Team LDLC', flag:'FR'}] },
    { version:'CS:GO', year:'2014', title:'DreamHack Winter 2014', date:'27 — 29 ноября 2014', organizer:'DreamHack', prize:'250 000 $', mvp:'Happy', city:'Йёнчёпинг', cityFlag:'SE', winner:{name:'Team LDLC', flag:'FR'}, second:{name:'Ninjas in Pyjamas', flag:'SE'}, semi:[{name:'Virtus.pro', flag:'PL'}, {name:'Natus Vincere', flag:'UA'}] },

    { version:'CS:GO', year:'2015', title:'ESL One Katowice 2015', date:'12 — 15 марта 2015', organizer:'ESL', prize:'250 000 $', mvp:'Olofmeister', city:'Катовице', cityFlag:'PL', winner:{name:'Fnatic', flag:'SE'}, second:{name:'Ninjas in Pyjamas', flag:'SE'}, semi:[{name:'Virtus.pro', flag:'PL'}, {name:'Team EnVyUs', flag:'FR'}] },
    { version:'CS:GO', year:'2015', title:'ESL One Cologne 2015', date:'20 — 23 августа 2015', organizer:'ESL', prize:'250 000 $', mvp:'flusha', city:'Кёльн', cityFlag:'DE', winner:{name:'Fnatic', flag:'SE'}, second:{name:'Team EnVyUs', flag:'FR'}, semi:[{name:'Virtus.pro', flag:'PL'}, {name:'Team SoloMid', flag:'DK'}] },
    { version:'CS:GO', year:'2015', title:'DreamHack Cluj-Napoca 2015', date:'28 октября — 1 ноября 2015', organizer:'DreamHack', prize:'250 000 $', mvp:'KennyS', city:'Клуж-Напока', cityFlag:'RO', winner:{name:'Team EnVyUs', flag:'FR'}, second:{name:'Natus Vincere', flag:'CIS'}, semi:[{name:'G2 Esports', flag:'EU'}, {name:'Ninjas in Pyjamas', flag:'SE'}] },

    { version:'CS:GO', year:'2016', title:'MLG Columbus 2016', date:'29 марта — 3 апреля 2016', organizer:'MLG', prize:'1 000 000 $', mvp:'coldzera', city:'Колумбус', cityFlag:'US', winner:{name:'Luminosity Gaming', flag:'BR'}, second:{name:'Natus Vincere', flag:'CIS'}, semi:[{name:'Astralis', flag:'DK'}, {name:'Team Liquid', flag:'US'}] },
    { version:'CS:GO', year:'2016', title:'ESL One: Cologne 2016', date:'5 — 10 июля 2016', organizer:'ESL', prize:'1 000 000 $', mvp:'coldzera', city:'Кёльн', cityFlag:'DE', winner:{name:'SK Gaming', flag:'BR'}, second:{name:'Team Liquid', flag:'US'}, semi:[{name:'Virtus.pro', flag:'PL'}, {name:'Fnatic', flag:'SE'}] },

    { version:'CS:GO', year:'2017', title:'ELEAGUE Atlanta 2017', date:'22 — 29 января 2017', organizer:'ELEAGUE', prize:'1 000 000 $', mvp:'Kjaerbye', city:'Атланта', cityFlag:'US', winner:{name:'Astralis', flag:'DK'}, second:{name:'Virtus.pro', flag:'PL'}, semi:[{name:'SK Gaming', flag:'BR'}, {name:'Fnatic', flag:'SE'}] },
    { version:'CS:GO', year:'2017', title:'PGL Major Kraków 2017', date:'16 — 23 июля 2017', organizer:'PGL', prize:'1 000 000 $', mvp:'AdreN', city:'Краков', cityFlag:'PL', winner:{name:'Gambit Esports', flag:'KZ'}, second:{name:'Immortals', flag:'BR'}, semi:[{name:'Astralis', flag:'DK'}, {name:'Virtus.pro', flag:'PL'}] },

    { version:'CS:GO', year:'2018', title:'ELEAGUE Boston 2018', date:'12 — 28 января 2018', organizer:'ELEAGUE', prize:'1 000 000 $', mvp:'Tarik', city:'Бостон', cityFlag:'US', winner:{name:'Cloud9', flag:'US'}, second:{name:'FaZe Clan', flag:'EU'}, semi:[{name:'Natus Vincere', flag:'UA'}, {name:'SK Gaming', flag:'BR'}] },
    { version:'CS:GO', year:'2018', title:'FACEIT Major 2018', date:'5 — 23 сентября 2018', organizer:'FACEIT', prize:'1 000 000 $', mvp:'dev1ce', city:'Лондон', cityFlag:'GB', winner:{name:'Astralis', flag:'DK'}, second:{name:'Natus Vincere', flag:'UA'}, semi:[{name:'MIBR', flag:'BR'}, {name:'Team Liquid', flag:'US'}] },

    { version:'CS:GO', year:'2019', title:'IEM Katowice 2019', date:'13 февраля — 3 марта 2019', organizer:'ESL', prize:'1 000 000 $', mvp:'Magisk', city:'Катовице', cityFlag:'PL', winner:{name:'Astralis', flag:'DK'}, second:{name:'ENCE', flag:'FI'}, semi:[{name:'MIBR', flag:'BR'}, {name:'Natus Vincere', flag:'UA'}] },
    { version:'CS:GO', year:'2019', title:'StarLadder Major 2019', date:'23 августа — 8 сентября 2019', organizer:'StarLadder', prize:'1 000 000 $', mvp:'dev1ce', city:'Берлин', cityFlag:'DE', winner:{name:'Astralis', flag:'DK'}, second:{name:'AVANGAR', flag:'KZ'}, semi:[{name:'Renegades', flag:'AU'}, {name:'NRG Esports', flag:'US'}] },

    { version:'CS:GO', year:'2020', title:'ESL One: Rio 2020', date:'19 — 22 ноября 2020', organizer:'ESL', prize:'2 000 000 $', mvp:'—', city:'Рио-де-Жанейро', cityFlag:'BR', cancelled:true, winner:{name:'Отменён', flag:''}, second:{name:'—', flag:''}, semi:[] },

    { version:'CS:GO', year:'2021', title:'PGL Major Stockholm 2021', date:'23 октября — 7 ноября 2021', organizer:'PGL', prize:'2 000 000 $', mvp:'s1mple', city:'Стокгольм', cityFlag:'SE', winner:{name:'Natus Vincere', flag:'RU'}, second:{name:'G2 Esports', flag:'EU'}, semi:[{name:'Gambit Esports', flag:'RU'}, {name:'Heroic', flag:'DK'}] },

    { version:'CS:GO', year:'2022', title:'PGL Antwerp 2022', date:'9 — 22 мая 2022', organizer:'PGL', prize:'1 000 000 $', mvp:'rain', city:'Антверпен', cityFlag:'BE', winner:{name:'FaZe Clan', flag:'EU'}, second:{name:'Natus Vincere', flag:'RU'}, semi:[{name:'Team Spirit', flag:'RU'}, {name:'ENCE', flag:'EU'}] },
    { version:'CS:GO', year:'2022', title:'IEM Rio Major 2022', date:'31 октября — 13 ноября 2022', organizer:'ESL', prize:'1 250 000 $', mvp:'Jame', city:'Рио-де-Жанейро', cityFlag:'BR', winner:{name:'Outsiders', flag:'RU'}, second:{name:'Heroic', flag:'DK'}, semi:[{name:'MOUZ', flag:'EU'}, {name:'FURIA Esports', flag:'BR'}] },

    { version:'CS:GO', year:'2023', title:'Blast Paris Major 2023', date:'8 мая — 21 мая 2023', organizer:'BLAST Premier', prize:'1 250 000 $', mvp:'ZywOo', city:'Париж', cityFlag:'FR', winner:{name:'Team Vitality', flag:'EU'}, second:{name:'GamerLegion', flag:'EU'}, semi:[{name:'Heroic', flag:'DK'}, {name:'Apeks', flag:'EU'}] },

    { version:'CS2', year:'2024', title:'PGL CS2 Major Copenhagen 2024', date:'17 марта — 31 марта 2024', organizer:'PGL', prize:'1 250 000 $', mvp:'JL', city:'Копенгаген', cityFlag:'DK', winner:{name:'Natus Vincere', flag:'EU'}, second:{name:'FaZe Clan', flag:'EU'}, semi:[{name:'Team Vitality', flag:'EU'}, {name:'G2 Esports', flag:'EU'}] },
    { version:'CS2', year:'2024', title:'Perfect World Shanghai Major 2024', date:'1 декабря — 15 декабря 2024', organizer:'Perfect World Esports', prize:'1 250 000 $', mvp:'Donk', city:'Шанхай', cityFlag:'CN', winner:{name:'Team Spirit', flag:'RU'}, second:{name:'FaZe Clan', flag:'EU'}, semi:[{name:'MOUZ', flag:'EU'}, {name:'G2 Esports', flag:'EU'}] },

    { version:'CS2', year:'2025', title:'Blast Austin Major 2025', date:'3 июня — 22 июня 2025', organizer:'BLAST Premier', prize:'1 250 000 $', mvp:'ZywOo', city:'Остин', cityFlag:'US', winner:{name:'Team Vitality', flag:'EU'}, second:{name:'The MongolZ', flag:'MN'}, semi:[{name:'MOUZ', flag:'EU'}, {name:'paiN', flag:'BR'}] },
    { version:'CS2', year:'2025', title:'StarLadder Budapest Major 2025', date:'24 ноября — 14 декабря 2025', organizer:'StarLadder', prize:'1 250 000 $', mvp:'ZywOo', city:'Будапешт', cityFlag:'HU', winner:{name:'Team Vitality', flag:'EU'}, second:{name:'FaZe Clan', flag:'EU'}, semi:[{name:'Team Spirit', flag:'RU'}, {name:'Natus Vincere', flag:'EU'}] },

    { version:'CS2', year:'2026', title:'IEM Cologne 2026', date:'2 июня — 21 июня 2026', organizer:'ESL', prize:'1 250 000 $', mvp:'—', city:'Кёльн', cityFlag:'DE', upcoming:true, winner:{name:'—', flag:''}, second:{name:'—', flag:''}, semi:[] }
  ];

  var countryFlags = {
    SE:'🇸🇪', FR:'🇫🇷', US:'🇺🇸', PL:'🇵🇱', DK:'🇩🇰', DE:'🇩🇪',
    UA:'🇺🇦', RO:'🇷🇴', CIS:'🌐', EU:'🇪🇺', BR:'🇧🇷', KZ:'🇰🇿',
    GB:'🇬🇧', FI:'🇫🇮', AU:'🇦🇺', RU:'🇷🇺', BE:'🇧🇪', CN:'🇨🇳',
    MN:'🇲🇳', HU:'🇭🇺'
  };

  var yearSelect = root.querySelector('#gdash-year-select');
  var tournamentSelect = root.querySelector('#gdash-tournament-select');
  var titleEl = root.querySelector('#gdash-tournament-title');
  var versionEl = root.querySelector('#gdash-version');
  var winnerEl = root.querySelector('#gdash-winner-name');
  var infoGrid = root.querySelector('#gdash-info-grid');
  var bracketWrap = root.querySelector('#gdash-bracket-wrap');
  var bracketEl = root.querySelector('#gdash-bracket');
  var thirdPlaceEl = root.querySelector('#gdash-third-place');
  var teamsGrid = root.querySelector('#gdash-teams-grid');

  function flag(code) {
    return countryFlags[code] || code || '';
  }

  function clearNode(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function logoUrl(name) {
    var initials = name
      .replace(/[^a-zA-Zа-яА-Я0-9 ]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(function (word) { return word.charAt(0).toUpperCase(); })
      .join('') || 'T';

    return 'https://placehold.co/80x80/111827/ffffff?text=' + encodeURIComponent(initials);
  }

  function makeInfoCard(label, value) {
    var card = document.createElement('div');
    card.className = 'gdash__info-card';
    card.innerHTML =
      '<span class="gdash__info-label">' + label + '</span>' +
      '<span class="gdash__info-value">' + value + '</span>';
    return card;
  }

  function makeTeam(name, country, score, games) {
    return {
      name: name || '—',
      flag: country || '',
      logo: logoUrl(name || 'Team'),
      games: games || 'Счет уточняется',
      score: score || '—'
    };
  }

  function makeTeamRow(team, winnerName) {
    var row = document.createElement('div');
    row.className = 'gdash__team-row' + (team.name === winnerName ? ' is-winner' : '');

    row.innerHTML =
      '<img class="gdash__team-logo" src="' + team.logo + '" alt="' + team.name + '">' +
      '<div class="gdash__team-main">' +
        '<div class="gdash__team-name-line">' +
          '<span class="gdash__flag">' + flag(team.flag) + '</span>' +
          '<span class="gdash__team-name">' + team.name + '</span>' +
        '</div>' +
        '<div class="gdash__games">' + team.games + '</div>' +
      '</div>' +
      '<div class="gdash__score">' + team.score + '</div>';

    return row;
  }

  function makeMatch(title, winnerName, teams) {
    var card = document.createElement('article');
    card.className = 'gdash__match';

    var matchName = document.createElement('div');
    matchName.className = 'gdash__match-name';
    matchName.textContent = title;
    card.appendChild(matchName);

    teams.forEach(function (team) {
      card.appendChild(makeTeamRow(team, winnerName));
    });

    return card;
  }

  function buildBracket(tournament) {
    if (tournament.cancelled) {
      return null;
    }

    if (tournament.upcoming || tournament.winner.name === '—') {
      return null;
    }

    var w = tournament.winner;
    var s = tournament.second;
    var sf1 = tournament.semi[0] || { name: 'Полуфиналист 1', flag: '' };
    var sf2 = tournament.semi[1] || { name: 'Полуфиналист 2', flag: '' };

    return [
      {
        key: 'quarter',
        title: '1/4 финала',
        matches: [
          { title:'Матч 1', winner:w.name, teams:[makeTeam(w.name, w.flag, '2'), makeTeam('Соперник 1', '', '—')] },
          { title:'Матч 2', winner:sf1.name, teams:[makeTeam(sf1.name, sf1.flag, '2'), makeTeam('Соперник 2', '', '—')] },
          { title:'Матч 3', winner:s.name, teams:[makeTeam(s.name, s.flag, '2'), makeTeam('Соперник 3', '', '—')] },
          { title:'Матч 4', winner:sf2.name, teams:[makeTeam(sf2.name, sf2.flag, '2'), makeTeam('Соперник 4', '', '—')] }
        ]
      },
      {
        key: 'semi',
        title: '1/2 финала',
        matches: [
          { title:'Полуфинал 1', winner:w.name, teams:[makeTeam(w.name, w.flag, '2'), makeTeam(sf1.name, sf1.flag, '—')] },
          { title:'Полуфинал 2', winner:s.name, teams:[makeTeam(s.name, s.flag, '2'), makeTeam(sf2.name, sf2.flag, '—')] }
        ]
      },
      {
        key: 'final',
        title: 'Гранд финал',
        matches: [
          { title:'Финал', winner:w.name, teams:[makeTeam(w.name, w.flag, '2'), makeTeam(s.name, s.flag, '—')] }
        ]
      }
    ];
  }

  function renderBracket(tournament) {
    clearNode(bracketEl);
    clearNode(thirdPlaceEl);

    var rounds = buildBracket(tournament);

    if (!rounds) {
      bracketWrap.innerHTML = '<div class="gdash__notice">' + (tournament.cancelled ? 'Турнир был отменен, поэтому сетка не отображается.' : 'Турнир еще не сыгран или в источнике нет данных для построения сетки.') + '</div>';
      return;
    }

    bracketWrap.innerHTML = '<div class="gdash__bracket" id="gdash-bracket"></div>';
    bracketEl = root.querySelector('#gdash-bracket');

    rounds.forEach(function (round) {
      var roundNode = document.createElement('div');
      roundNode.className = 'gdash__round gdash__round--' + round.key;

      var title = document.createElement('h4');
      title.className = 'gdash__round-title';
      title.textContent = round.title;

      var inner = document.createElement('div');
      inner.className = 'gdash__round-inner';

      round.matches.forEach(function (match) {
        inner.appendChild(makeMatch(match.title, match.winner, match.teams));
      });

      roundNode.appendChild(title);
      roundNode.appendChild(inner);
      bracketEl.appendChild(roundNode);
    });

    var thirdTitle = document.createElement('h3');
    thirdTitle.className = 'gdash__third-title';
    thirdTitle.textContent = 'Отдельный матч за третье место';
    thirdPlaceEl.appendChild(thirdTitle);

    var thirdLayout = document.createElement('div');
    thirdLayout.className = 'gdash__third-layout';

    var sf1 = tournament.semi[0] || { name: 'Полуфиналист 1', flag: '' };
    var sf2 = tournament.semi[1] || { name: 'Полуфиналист 2', flag: '' };

    thirdLayout.appendChild(
      makeMatch('Матч за 3 место', 'Победитель уточняется', [
        makeTeam(sf1.name, sf1.flag, '—', 'Счет уточняется'),
        makeTeam(sf2.name, sf2.flag, '—', 'Счет уточняется')
      ])
    );

    thirdPlaceEl.appendChild(thirdLayout);
  }

  function uniqueYears() {
    var years = [];
    tournaments.forEach(function (item) {
      if (years.indexOf(item.year) === -1) years.push(item.year);
    });
    return years.sort(function (a, b) { return Number(a) - Number(b); });
  }

  function tournamentsByYear(year) {
    return tournaments.filter(function (item) {
      return item.year === year;
    });
  }

  function initYears() {
    clearNode(yearSelect);

    uniqueYears().forEach(function (year) {
      var option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    yearSelect.value = uniqueYears()[uniqueYears().length - 1];
  }

  function updateTournamentSelect() {
    clearNode(tournamentSelect);

    tournamentsByYear(yearSelect.value).forEach(function (tournament, index) {
      var option = document.createElement('option');
      option.value = String(index);
      option.textContent = tournament.title;
      tournamentSelect.appendChild(option);
    });

    tournamentSelect.value = '0';
  }

  function getCurrentTournament() {
    var list = tournamentsByYear(yearSelect.value);
    return list[Number(tournamentSelect.value)] || list[0] || tournaments[0];
  }

  function renderTournament() {
    var tournament = getCurrentTournament();

    versionEl.textContent = tournament.version;
    titleEl.textContent = tournament.title;
    winnerEl.textContent = tournament.winner.name || '—';

    clearNode(infoGrid);
    infoGrid.appendChild(makeInfoCard('Дата', tournament.date));
    infoGrid.appendChild(makeInfoCard('Организатор', tournament.organizer));
    infoGrid.appendChild(makeInfoCard('Призовой фонд', tournament.prize));
    infoGrid.appendChild(makeInfoCard('MVP', tournament.mvp || '—'));
    infoGrid.appendChild(makeInfoCard('Город', flag(tournament.cityFlag) + ' ' + tournament.city));
    infoGrid.appendChild(makeInfoCard('Победитель', flag(tournament.winner.flag) + ' ' + tournament.winner.name));
    infoGrid.appendChild(makeInfoCard('Второе место', flag(tournament.second.flag) + ' ' + tournament.second.name));
    infoGrid.appendChild(makeInfoCard('Полуфиналисты', tournament.semi.length ? tournament.semi.map(function (team) { return flag(team.flag) + ' ' + team.name; }).join(', ') : '—'));

    renderBracket(tournament);
  }

  function getAllTeams() {
    var map = {};

    tournaments.forEach(function (tournament) {
      [tournament.winner, tournament.second].concat(tournament.semi || []).forEach(function (team) {
        if (!team || !team.name || team.name === '—' || team.name === 'Отменён') return;

        if (!map[team.name]) {
          map[team.name] = {
            name: team.name,
            flag: team.flag,
            logo: logoUrl(team.name),
            tournaments: []
          };
        }

        if (map[team.name].tournaments.indexOf(tournament.year) === -1) {
          map[team.name].tournaments.push(tournament.year);
        }
      });
    });

    return Object.keys(map).sort().map(function (key) {
      return map[key];
    });
  }

  function renderTeams() {
    clearNode(teamsGrid);

    getAllTeams().forEach(function (team) {
      var card = document.createElement('article');
      card.className = 'gdash__team-card';
      card.innerHTML =
        '<div class="gdash__team-card-head">' +
          '<img class="gdash__team-card-logo" src="' + team.logo + '" alt="' + team.name + '">' +
          '<div>' +
            '<h3 class="gdash__team-card-name">' + team.name + '</h3>' +
            '<div class="gdash__team-card-meta">' + flag(team.flag) + ' ' + team.flag + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="gdash__team-card-meta">Годы в турнирах: ' + team.tournaments.join(', ') + '</div>';
      teamsGrid.appendChild(card);
    });
  }

  root.querySelectorAll('.gdash__nav-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      var page = button.getAttribute('data-page');

      root.querySelectorAll('.gdash__nav-btn').forEach(function (btn) {
        btn.classList.toggle('is-active', btn === button);
      });

      root.querySelectorAll('.gdash__page').forEach(function (section) {
        section.classList.toggle('is-active', section.getAttribute('data-page-content') === page);
      });
    });
  });

  yearSelect.addEventListener('change', function () {
    updateTournamentSelect();
    renderTournament();
  });

  tournamentSelect.addEventListener('change', renderTournament);

  initYears();
  updateTournamentSelect();
  renderTournament();
  renderTeams();
})();
