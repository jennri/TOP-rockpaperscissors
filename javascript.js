const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtnRock = document.querySelector("#rock");
const choiceBtnPaper = document.querySelector("#paper");
const choiceBtnScissors = document.querySelector("#scissors");
const computerScore = document.querySelector(".tally_computer")
const humanScore = document.querySelector(".tally_human")
const winner = document.querySelector(".winner")
const roundText = document.querySelector(".round")

//Rock, Paper, Scissors buttons that gives the gameRoundWinner() it's parameter
choiceBtnRock.addEventListener('click', () => gameOrder("Rock"))
choiceBtnPaper.addEventListener('click', () => gameOrder("Paper"))
choiceBtnScissors.addEventListener('click', () => gameOrder("Scissors"))
document.getElementById("endGame").style.display = "none";

//Declaring global variables to be used in the HTML display
let computerSelection;
let result;
let totalPlayerScore = 0;
let totalCompScore = 0;
let roundnum = 0;

//Order of functions when a round is played. gameRoundWinner() takes computerRandomiser input and player inputs to determine a winner.
//Winner of the round is displayed.
//Scores of both computer and player and the rounds are tracked and displayed. 
//If either score reached 5, endGame() is run.
function gameOrder(playerSelection){
    computerRandomiser();
    gameRoundWinner(playerSelection)
    gameRound();
    playerText.textContent = `You: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    computerScore.textContent = `Computer: ${totalCompScore}`
    humanScore.textContent = `You: ${totalPlayerScore}`
    resultText.textContent = result;
    roundText.textContent = `Round: ${roundnum}`
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

function gameRound() {
    roundnum += 1;
}

//Determining the winner from player and computer inputs using switch cases, comparing the player input to the computers. 
//Every scenario counts the total scores for both players and returns a string declaring who won. 
function gameRoundWinner(playerSelection) { 
    if (computerSelection == playerSelection) {
        result = "Tie!"
    }
    if (playerSelection == "Rock") {
        switch (computerSelection) {
            case "Scissors":
                result = "You Win! Rock beats Scissors"
                totalPlayerScore += 1
                break;
            case "Paper":
                result = "You Lose! Paper beats rock"
                totalCompScore += 1
                break;
        }
    }
    else if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                result = "You Lose! Rock beats Scissors"
                totalCompScore += 1
                break;
            case "Paper":
                result = "You Win! Scissors beats paper"
                totalPlayerScore += 1
                break;
        }
    }
    else if (playerSelection == "Paper") {
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

//When either side has 5 points, the buttons are disabled and a pop-up is enabled with a reset button.
function endGame() {    
    if (totalPlayerScore == 5 ) {
        winner.textContent = `You defeated the computer!`
    } 
    if (totalCompScore == 5) {
        winner.textContent = `Mission Failed, We'll get them next time...`
    }
    //Disables buttons and pops up the play again button
    choiceBtnRock.setAttribute('disabled', '')
    choiceBtnPaper.setAttribute('disabled', '')
    choiceBtnScissors.setAttribute('disabled', '')
    document.getElementById("endGame").style.display = "block";

       
    }


