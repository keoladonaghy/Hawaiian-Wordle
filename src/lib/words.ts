import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word) ||
    VALIDGUESSES.includes(word)
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641031200000 // Hawaiian Time, chee!!!
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    solution: WORDS[index],
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
