(function () {
  var root = document.getElementById('gdash-root');
  if (!root) return;

  var tournaments = [
    {
      year: '2026',
      title: 'Winter Arena Cup',
      date: '12–14 февраля 2026',
      organizer: 'Arena League',
      mvp: 'Игрок Alpha',
      city: 'Москва',
      winner: 'North Wolves',
      secondPlace: 'Red Foxes',
      semifinalists: 'Storm Nine, Iron Bears',
      thirdPlaceMatch: {
        title: 'Матч за третье место',
        teams: [
          {
            name: 'Storm Nine',
            flag: 'KZ',
            logo: 'https://placehold.co/80x80/111827/ffffff?text=S9',
            games: 'Игры: 2:0, 1:2, 2:1',
            score: '2'
          },
          {
            name: 'Iron Bears',
            flag: 'RU',
            logo: 'https://placehold.co/80x80/374151/ffffff?text=IB',
            games: 'Игры: 0:2, 2:1, 1:2',
            score: '1'
          }
        ],
        winner: 'Storm Nine'
      },
      rounds: [
        {
          key: 'quarter',
          title: '1/4 финала',
          matches: [
            {
              title: 'Матч 1',
              winner: 'North Wolves',
              teams: [
                { name: 'North Wolves', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=NW', games: 'Игры: 2:0, 2:1', score: '2' },
                { name: 'Blue Sharks', flag: 'BY', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=BS', games: 'Игры: 0:2, 1:2', score: '0' }
              ]
            },
            {
              title: 'Матч 2',
              winner: 'Storm Nine',
              teams: [
                { name: 'Storm Nine', flag: 'KZ', logo: 'https://placehold.co/80x80/111827/ffffff?text=S9', games: 'Игры: 1:2, 2:0, 2:1', score: '2' },
                { name: 'White Ravens', flag: 'AM', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=WR', games: 'Игры: 2:1, 0:2, 1:2', score: '1' }
              ]
            },
            {
              title: 'Матч 3',
              winner: 'Red Foxes',
              teams: [
                { name: 'Red Foxes', flag: 'GE', logo: 'https://placehold.co/80x80/111827/ffffff?text=RF', games: 'Игры: 2:0, 2:0', score: '2' },
                { name: 'Silver Hawks', flag: 'KG', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=SH', games: 'Игры: 0:2, 0:2', score: '0' }
              ]
            },
            {
              title: 'Матч 4',
              winner: 'Iron Bears',
              teams: [
                { name: 'Iron Bears', flag: 'RU', logo: 'https://placehold.co/80x80/374151/ffffff?text=IB', games: 'Игры: 0:2, 2:1, 2:0', score: '2' },
                { name: 'Black Bulls', flag: 'UZ', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=BB', games: 'Игры: 2:0, 1:2, 0:2', score: '1' }
              ]
            }
          ]
        },
        {
          key: 'semi',
          title: '1/2 финала',
          matches: [
            {
              title: 'Полуфинал 1',
              winner: 'North Wolves',
              teams: [
                { name: 'North Wolves', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=NW', games: 'Игры: 2:1, 2:0', score: '2' },
                { name: 'Storm Nine', flag: 'KZ', logo: 'https://placehold.co/80x80/111827/ffffff?text=S9', games: 'Игры: 1:2, 0:2', score: '0' }
              ]
            },
            {
              title: 'Полуфинал 2',
              winner: 'Red Foxes',
              teams: [
                { name: 'Red Foxes', flag: 'GE', logo: 'https://placehold.co/80x80/111827/ffffff?text=RF', games: 'Игры: 2:0, 1:2, 2:1', score: '2' },
                { name: 'Iron Bears', flag: 'RU', logo: 'https://placehold.co/80x80/374151/ffffff?text=IB', games: 'Игры: 0:2, 2:1, 1:2', score: '1' }
              ]
            }
          ]
        },
        {
          key: 'final',
          title: 'Гранд финал',
          matches: [
            {
              title: 'Финал',
              winner: 'North Wolves',
              teams: [
                { name: 'North Wolves', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=NW', games: 'Игры: 2:1, 0:2, 2:0', score: '2' },
                { name: 'Red Foxes', flag: 'GE', logo: 'https://placehold.co/80x80/111827/ffffff?text=RF', games: 'Игры: 1:2, 2:0, 0:2', score: '1' }
              ]
            }
          ]
        }
      ]
    },
    {
      year: '2025',
      title: 'Autumn Pro League',
      date: '18–20 октября 2025',
      organizer: 'Pro Gaming Union',
      mvp: 'Игрок Bravo',
      city: 'Казань',
      winner: 'Delta Squad',
      secondPlace: 'Nova Team',
      semifinalists: 'Cyber Lynx, Titan Crew',
      thirdPlaceMatch: {
        title: 'Матч за третье место',
        teams: [
          {
            name: 'Cyber Lynx',
            flag: 'RU',
            logo: 'https://placehold.co/80x80/111827/ffffff?text=CL',
            games: 'Игры: 2:1, 2:0',
            score: '2'
          },
          {
            name: 'Titan Crew',
            flag: 'KZ',
            logo: 'https://placehold.co/80x80/374151/ffffff?text=TC',
            games: 'Игры: 1:2, 0:2',
            score: '0'
          }
        ],
        winner: 'Cyber Lynx'
      },
      rounds: [
        {
          key: 'quarter',
          title: '1/4 финала',
          matches: [
            {
              title: 'Матч 1',
              winner: 'Delta Squad',
              teams: [
                { name: 'Delta Squad', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=DS', games: 'Игры: 2:0, 2:1', score: '2' },
                { name: 'Omega Five', flag: 'BY', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=O5', games: 'Игры: 0:2, 1:2', score: '0' }
              ]
            },
            {
              title: 'Матч 2',
              winner: 'Cyber Lynx',
              teams: [
                { name: 'Cyber Lynx', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=CL', games: 'Игры: 2:1, 2:0', score: '2' },
                { name: 'Rocket Mind', flag: 'AM', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=RM', games: 'Игры: 1:2, 0:2', score: '0' }
              ]
            },
            {
              title: 'Матч 3',
              winner: 'Nova Team',
              teams: [
                { name: 'Nova Team', flag: 'UZ', logo: 'https://placehold.co/80x80/111827/ffffff?text=NT', games: 'Игры: 2:0, 2:0', score: '2' },
                { name: 'Flash Point', flag: 'KG', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=FP', games: 'Игры: 0:2, 0:2', score: '0' }
              ]
            },
            {
              title: 'Матч 4',
              winner: 'Titan Crew',
              teams: [
                { name: 'Titan Crew', flag: 'KZ', logo: 'https://placehold.co/80x80/374151/ffffff?text=TC', games: 'Игры: 2:1, 0:2, 2:1', score: '2' },
                { name: 'Sharp Nine', flag: 'GE', logo: 'https://placehold.co/80x80/e5e7eb/111827?text=SN', games: 'Игры: 1:2, 2:0, 1:2', score: '1' }
              ]
            }
          ]
        },
        {
          key: 'semi',
          title: '1/2 финала',
          matches: [
            {
              title: 'Полуфинал 1',
              winner: 'Delta Squad',
              teams: [
                { name: 'Delta Squad', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=DS', games: 'Игры: 2:0, 2:1', score: '2' },
                { name: 'Cyber Lynx', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=CL', games: 'Игры: 0:2, 1:2', score: '0' }
              ]
            },
            {
              title: 'Полуфинал 2',
              winner: 'Nova Team',
              teams: [
                { name: 'Nova Team', flag: 'UZ', logo: 'https://placehold.co/80x80/111827/ffffff?text=NT', games: 'Игры: 2:1, 2:0', score: '2' },
                { name: 'Titan Crew', flag: 'KZ', logo: 'https://placehold.co/80x80/374151/ffffff?text=TC', games: 'Игры: 1:2, 0:2', score: '0' }
              ]
            }
          ]
        },
        {
          key: 'final',
          title: 'Гранд финал',
          matches: [
            {
              title: 'Финал',
              winner: 'Delta Squad',
              teams: [
                { name: 'Delta Squad', flag: 'RU', logo: 'https://placehold.co/80x80/111827/ffffff?text=DS', games: 'Игры: 2:0, 2:1', score: '2' },
                { name: 'Nova Team', flag: 'UZ', logo: 'https://placehold.co/80x80/111827/ffffff?text=NT', games: 'Игры: 0:2, 1:2', score: '0' }
              ]
            }
          ]
        }
      ]
    }
  ];

  var countryFlags = {
    RU: '🇷🇺',
    KZ: '🇰🇿',
    BY: '🇧🇾',
    AM: '🇦🇲',
    GE: '🇬🇪',
    KG: '🇰🇬',
    UZ: '🇺🇿'
  };

  var yearSelect = root.querySelector('#gdash-year-select');
  var titleEl = root.querySelector('#gdash-tournament-title');
  var winnerEl = root.querySelector('#gdash-winner-name');
  var infoGrid = root.querySelector('#gdash-info-grid');
  var bracketEl = root.querySelector('#gdash-bracket');
  var thirdPlaceEl = root.querySelector('#gdash-third-place');
  var teamsGrid = root.querySelector('#gdash-teams-grid');

  function flag(code) {
    return countryFlags[code] || code || '';
  }

  function clearNode(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function makeInfoCard(label, value) {
    var card = document.createElement('div');
    card.className = 'gdash__info-card';
    card.innerHTML =
      '<span class="gdash__info-label">' + label + '</span>' +
      '<span class="gdash__info-value">' + value + '</span>';
    return card;
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

  function makeMatch(match) {
    var card = document.createElement('article');
    card.className = 'gdash__match';

    var matchName = document.createElement('div');
    matchName.className = 'gdash__match-name';
    matchName.textContent = match.title;
    card.appendChild(matchName);

    match.teams.forEach(function (team) {
      card.appendChild(makeTeamRow(team, match.winner));
    });

    return card;
  }

  function renderBracket(tournament) {
    clearNode(bracketEl);

    tournament.rounds.forEach(function (round) {
      var roundNode = document.createElement('div');
      roundNode.className = 'gdash__round gdash__round--' + round.key;

      var title = document.createElement('h4');
      title.className = 'gdash__round-title';
      title.textContent = round.title;

      var inner = document.createElement('div');
      inner.className = 'gdash__round-inner';

      round.matches.forEach(function (match) {
        inner.appendChild(makeMatch(match));
      });

      roundNode.appendChild(title);
      roundNode.appendChild(inner);
      bracketEl.appendChild(roundNode);
    });
  }

  function renderThirdPlace(tournament) {
    clearNode(thirdPlaceEl);

    var title = document.createElement('h3');
    title.className = 'gdash__third-title';
    title.textContent = 'Отдельный матч за третье место';
    thirdPlaceEl.appendChild(title);

    var layout = document.createElement('div');
    layout.className = 'gdash__third-layout';
    layout.appendChild(makeMatch(tournament.thirdPlaceMatch));
    thirdPlaceEl.appendChild(layout);
  }

  function getAllTeams() {
    var map = {};

    tournaments.forEach(function (tournament) {
      tournament.rounds.forEach(function (round) {
        round.matches.forEach(function (match) {
          match.teams.forEach(function (team) {
            if (!map[team.name]) {
              map[team.name] = {
                name: team.name,
                flag: team.flag,
                logo: team.logo,
                tournaments: []
              };
            }
            if (map[team.name].tournaments.indexOf(tournament.year) === -1) {
              map[team.name].tournaments.push(tournament.year);
            }
          });
        });
      });
    });

    return Object.keys(map).map(function (key) {
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
        '<div class="gdash__team-card-meta">Участие в турнирах: ' + team.tournaments.join(', ') + '</div>';
      teamsGrid.appendChild(card);
    });
  }

  function renderTournament(year) {
    var tournament = tournaments.find(function (item) {
      return item.year === year;
    }) || tournaments[0];

    titleEl.textContent = tournament.title;
    winnerEl.textContent = tournament.winner;

    clearNode(infoGrid);
    infoGrid.appendChild(makeInfoCard('Дата', tournament.date));
    infoGrid.appendChild(makeInfoCard('Организатор', tournament.organizer));
    infoGrid.appendChild(makeInfoCard('Ценный игрок', tournament.mvp));
    infoGrid.appendChild(makeInfoCard('Город проведения', tournament.city));
    infoGrid.appendChild(makeInfoCard('Победитель', tournament.winner));
    infoGrid.appendChild(makeInfoCard('Второе место', tournament.secondPlace));
    infoGrid.appendChild(makeInfoCard('Полуфиналисты', tournament.semifinalists));
    infoGrid.appendChild(makeInfoCard('Матч за 3 место', tournament.thirdPlaceMatch.winner));

    renderBracket(tournament);
    renderThirdPlace(tournament);
  }

  function initYears() {
    clearNode(yearSelect);

    tournaments.forEach(function (tournament) {
      var option = document.createElement('option');
      option.value = tournament.year;
      option.textContent = tournament.year;
      yearSelect.appendChild(option);
    });

    yearSelect.value = tournaments[0].year;
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
    renderTournament(yearSelect.value);
  });

  initYears();
  renderTournament(yearSelect.value);
  renderTeams();
})();