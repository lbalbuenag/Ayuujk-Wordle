import { CONFIG } from './config'

export const WORDS = [
"kaaky","nitky","kë'xp","wääjx","tiixy","käjpy","xejty","kutpy","ko'on","yuu'n","kujup","najan","kujan","kë'ëk","xuumy"
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
