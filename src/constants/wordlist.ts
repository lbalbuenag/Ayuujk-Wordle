import { CONFIG } from './config'

export const WORDS = [
"kaaky",
"nitky",
"kë'xp",
"wääjx",
"tiixy",
"käjpy",
"xejty",
"kutpy",
"ko'on",
"yuu'n",
"kujup",
"najan",
"kujan",
"kë'ëk",
"xuumy",
"japom",
"kiixy",
"nëjkx",
"këjxp",
"Tse'ek",
"Tso'ok",
"Weejts",
"Pääjts",
"Määjts",
"Wä'äts",
"Yo'kt",
"Jotmay",
"Xëtun",
"Pawets",
"Pakon",
"Matow",
"Nëjkx",
"Käjpx",
"Ee'px",
"Ka'ak",
"Kë'ëk",
"Ko'ok",
"Po'ot",
"Pa'at",
"Tsujxt",
"Tsujxk",
"Joojt",
"Tsejxk",
"Tsajkx",
"Jajxk",
"Tsëë'm",
"Tsëënï",
"Tsujtk",
"Tu'uk",
"Majtsk",
"Yäjkts",
"Tsäjpts",
"Täjxp",
"Tojkx",
"Uu'nk",
"Tsa'nk",
"Jo'kx",
"Jä'ät",
"Jä'äx",
"Kuuty",
"Muutsy",
"Ma'ak",
"Mä'äk",
"Më'ëk",
"Pakon",
"Pawets",
"Pawäw",
"Pakäp",
"Patäj",
"Panap",
"Patun",
"Papëk",
"Papew",
"Papo'",
"Juujï",
"Tsajtsp",
"Ajopë",
"Käjpx",
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
