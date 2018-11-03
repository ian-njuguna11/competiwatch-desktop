export default {
  roles: ['DPS', 'Flanker', 'Hitscan', 'Defense', 'Off-tank', 'Main Tank', 'Main Healer', 'Off-healer'],
  names: [
    'Ana',
    'Ashe',
    'Bastion',
    'Brigitte',
    'D.Va',
    'Doomfist',
    'Genji',
    'Hanzo',
    'Junkrat',
    'Lúcio',
    'McCree',
    'Mei',
    'Mercy',
    'Moira',
    'Orisa',
    'Pharah',
    'Reaper',
    'Reinhardt',
    'Roadhog',
    'Soldier: 76',
    'Sombra',
    'Symmetra',
    'Torbjörn',
    'Tracer',
    'Widowmaker',
    'Winston',
    'Wrecking Ball',
    'Zarya',
    'Zenyatta'
  ],
  byType: {
    DPS: ['Pharah', 'Reaper', 'Doomfist', 'Junkrat'],
    Flanker: ['Genji', 'Sombra', 'Tracer'],
    Hitscan: ['Ashe', 'McCree', 'Soldier: 76', 'Widowmaker'],
    Tank: ['D.Va', 'Orisa', 'Reinhardt', 'Roadhog', 'Winston', 'Wrecking Ball', 'Zarya'],
    'Main Tank': ['Orisa', 'Reinhardt', 'Winston'],
    'Off-tank': ['D.Va', 'Roadhog', 'Wrecking Ball', 'Zarya'],
    Defense: ['Bastion', 'Hanzo', 'Mei', 'Symmetra', 'Torbjörn'],
    Healer: ['Ana', 'Brigitte', 'Lúcio', 'Mercy', 'Moira', 'Zenyatta'],
    'Main Healer': ['Ana', 'Mercy', 'Moira'],
    'Off-healer': ['Brigitte', 'Lúcio', 'Zenyatta']
  },
  firstSeasons: {
    Moira: 7,
    Brigitte: 10,
    Orisa: 4,
    Doomfist: 5,
    Sombra: 2,
    'Wrecking Ball': 11,
    Ashe: 14
  }
}
