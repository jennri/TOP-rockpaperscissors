//All this, I have no idea what it does. Looked at a tutorial on youtube. 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const tallyComputer = document.querySelector(".tally_computer");
const tallyHuman = document.querySelector(".tally_human");
const winner = document.querySelector(".victory_screen");

//Declaring global variables
let playerSelection;
let computerSelection;
let result;
let totalPlayerScore = 0;
let totalCompScore = 0;

//When a button is clicked by the player
choiceBtns.forEach(button => button.addEventListener("click", () =>  {
    playerSelection = button.textContent;
    computerRandomiser();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = gameRoundWinner();
    tallyComputer.textContent = `Opponent score count: ${totalCompScore}`
    tallyHuman.textContent = `Your score count: ${totalPlayerScore}`
    if (totalCompScore == 5) {
        winner.textContent = `You Lost...`
        totalPlayerScore = 0;
        totalCompScore = 0;
    }
    if (totalPlayerScore == 5) {
        winner.textContent = `You Won!`
        totalPlayerScore = 0;
        totalCompScore = 0;
    }
}))



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
            case "Scissors":
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
            case "Pock":
                result = "You Win! Paper beats rock"
                totalPlayerScore += 1
                break;
        }
    }
    return result;
}

