const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtnRock = document.querySelector("#rock");
const choiceBtnPaper = document.querySelector("#paper");
const choiceBtnScissors = document.querySelector("#scissors");
const computerScore = document.querySelector(".tally_computer")
const humanScore = document.querySelector(".tally_human")
const winner = document.querySelector(".winner")

choiceBtnRock.addEventListener('click', () => gameOrder("Rock"))
choiceBtnPaper.addEventListener('click', () => gameOrder("Paper"))
choiceBtnScissors.addEventListener('click', () => gameOrder("Scissors"))
document.getElementById("endGame").style.display = "none";

//Game
let computerSelection;
let result;
let totalPlayerScore = 0;
let totalCompScore = 0;
let round = 0;

//Order of Game
function gameOrder(playerSelection){
    computerRandomiser();
    gameRoundWinner(playerSelection)
    playerText.textContent = `You: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    computerScore.textContent = `Opponent score count: ${totalCompScore}`
    humanScore.textContent = `Your score count: ${totalPlayerScore}`
    resultText.textContent = result;
    if (totalPlayerScore == 5 || totalCompScore == 5) {
        endGame();
    }

}

//Reset Button
const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', () => location.reload());

//Computer random choice of rock paper or scissors
function computerRandomiser() {
    const options = ["Rock", "Paper", "Scissors"]
    let position = Math.floor(Math.random() * options.length)
    computerSelection = options[position];
    return computerSelection;
}

//Declaring round winner
function gameRoundWinner(playerSelection) { 
    if (computerSelection === playerSelection) {
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

//Declaring Winner
function endGame() {    
    if (totalPlayerScore == 5 ) {
        winner.textContent = `You won, it's by chance though`
    } 
    if (totalCompScore == 5) {
        winner.textContent = `You Lost...`
    }
    //Disables buttons and pops up the play again button
    choiceBtnRock.setAttribute('disabled', '')
    choiceBtnPaper.setAttribute('disabled', '')
    choiceBtnScissors.setAttribute('disabled', '')
    document.getElementById("endGame").style.display = "block";

       
    }


