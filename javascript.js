const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const computerScore = document.querySelector(".tally_computer")
const humanScore = document.querySelector(".tally_human")
const winner = document.querySelector(".winner")

let playerSelection;
let computerSelection;
let result;
let totalPlayerScore = 0;
let totalCompScore = 0;

choiceBtn.forEach(button => button.addEventListener("click", () =>  {
    playerSelection = button.textContent;
    computerRandomiser();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = gameRoundWinner();
    computerScore.textContent = `Opponent score count: ${totalCompScore}`
    humanScore.textContent = `Your score count: ${totalPlayerScore}`
    if (totalPlayerScore == 5) {
        winner.textContent = `You won, it's by chance though`
    }
    if (totalCompScore == 5){
        winner.textContent = `You Lost...`
    }
}))


//Play Again button


//Computer random choice of rock paper or scissors
function computerRandomiser() {
    const options = ["Rock", "Paper", "Scissors"]
    let position = Math.floor(Math.random() * options.length)
    computerSelection = options[position];
    return computerSelection;
}

//Declaring round winner
function gameRoundWinner() {
    if (computerSelection == playerSelection) {
        result = "Tie!"
    }
    if (playerSelection == "Rock") {
        switch (computerSelection) {
            case "Scissor":
                result = "You win! Rock beats scissors"
                totalPlayerScore += 1
                break;
            case "Paper":
                result = "You Lose! Paper beats rock"
                totalCompScore += 1
                break;
        }
    }
    if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                result = "You Lose! Rock beats scissors"
                totalCompScore += 1
                break;
            case "Paper":
                result = "You Win! Scissors beats paper"
                totalPlayerScore += 1
                break;
        }
    }
    if (playerSelection == "Paper") {
        switch (computerSelection) {
            case "Scissors":
                result = "You Lose! Scissors beats paper"
                totalCompScore += 1
                break;
            case "Rock":
                result = "You Win! Paper beats rock"
                totalPlayerScore += 1
                break;
        }
    }

    return result;
}