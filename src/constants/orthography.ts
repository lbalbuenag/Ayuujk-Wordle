import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"A",
"Ä",
"E",
"Ë",
"I",
"Ï",
"O",
"U",
"P",
"T",
"K",
"TS",
"X",
"M",
"N",
"W",
"Y",
"J",
"L",
"R",
"S",
"'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
