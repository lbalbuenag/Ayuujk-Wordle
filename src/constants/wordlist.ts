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
"tse'ek",
"tso'ok",
"weejts",
"pääjts",
"määjts",
"wä'äts",
"yo'kt",
"xëtun",
"pawets",
"pakon",
"matow",
"nëjkx",
"käjpx",
"ee'px",
"ka'ak",
"kë'ëk",
"ko'ok",
"po'ot",
"pa'at",
"tsujxt",
"tsujxk",
"joojt",
"tsejxk",
"tsajkx",
"jajxk",
"tsëë'm",
"tsëënï",
"tsujtk",
"tu'uk",
"majtsk",
"yäjkts",
"tsäjpts",
"täjxp",
"tojkx",
"uu'nk",
"tsa'nk",
"jo'kx",
"jä'ät",
"jä'äx",
"kuuty",
"muutsy",
"ma'ak",
"mä'äk",
"më'ëk",
"pakon",
"pawets",
"pawäw",
"pakäp",
"patäj",
"panap",
"patun",
"papëk",
"papew",
"papo'",
"juujï",
"tsajtsp",
"ajopë",
"käjpx"
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
