function guessingGame() {
    const answer = Math.floor(Math.random() * 100)
    let guesses = 0
    let gameOver = false
    return function (num) {
        console.log(num, answer)
        if (num === answer && gameOver === false) {
            gameOver = true
            guesses = guesses + 1
            return `You win! You found ${answer} in ${guesses} guesses.`
        } else if (num < answer) {
            guesses = guesses + 1
            return `${num} is too low!`

        } else if (num > answer) {
            guesses = guesses + 1
            return `${num} is too high!`
        } else if (gameOver) {
            return "The game is over, you already won!"
        }

    }
}

module.exports = { guessingGame };
