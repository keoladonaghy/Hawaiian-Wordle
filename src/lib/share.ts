import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'


export const shareStatus = (guesses: string[][]) => {
  navigator.clipboard.writeText(
    ' Hulihua: He Nane ‘Ōlelo Hawai‘i ' +
    solutionIndex +
    ' ' +
    guesses.length +
    '/6\n\n' +
    generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[][]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
