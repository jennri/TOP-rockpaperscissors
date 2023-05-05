//Computer random choice of rock paper or scissors
function computerRandomiser() {
    const options = ["rock", "paper", "scissor"]
    let position = Math.floor(Math.random() * options.length)
    return options[position];
}

let totalPlayerScore = 0;
let totalCompScore = 0;

function gameRound(playerSelect) {
    let computerSelection = computerRandomiser()
    let playerSelection = playerSelect.toLowerCase();
    let whoWon;

    if (computerSelection == playerSelection) {
        whoWon = "Tie!"
    }
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "scissor":
                whoWon = "You win! Rock beats scissor"
                totalPlayerScore += 1
                break;
            case "paper":
                whoWon = "You Lose! Paper beats rock"
                totalCompScore += 1
                break;
        }
    }
    if (playerSelection == "scissor") {
        switch (computerSelection) {
            case "rock":
                whoWon = "You Lose! Rock beats scissor"
                totalCompScore += 1
                break;
            case "paper":
                whoWon = "You Win! Scissor beats paper"
                totalPlayerScore += 1
                break;
        }
    }
    if (playerSelection == "paper") {
        switch (computerSelection) {
            case "scissor":
                whoWon = "You Lose! Scissor beats paper"
                totalCompScore += 1
                break;
            case "rock":
                whoWon = "You Win! Paper beats rock"
                totalPlayerScore += 1
                break;
        }
    }

    if (totalPlayerScore == 5) {
        return whoWon + " You won the game!"
    }

    if (totalCompScore == 5) {
        return whoWon + " You lost the game!"
    }

    return whoWon;
}


console.log(gameRound("rock"));


console.log(totalCompScore + " " + totalPlayerScore)