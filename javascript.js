function computerSelection(){
    const options = ["rock", "paper", "scissor"]
    let position = Math.floor(Math.random()*options.length)
    return options[position]
}

let compSelect = computerSelection();
console.log(compSelect)

function gameRound (playerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    console.log(playerSelect, playerSelection);

    if (playerSelect === "rock") {
        let x = compSelect;
        switch (x) {
            case "rock":
                return "Tie!"
            case "scissor":
                return "You Lose! Rock beats Scissors"
            case "paper":
                return "You Win! Paper beats Rock"
        }
    }

    if (playerSelect === "scissor") {
        let x = compSelect;
        switch (x) {
            case "rock":
                return "You Lose! Rock beats Scissors"
            case "scissor":
                return "Tie!"
            case "paper":
                return "You Win! Scissors beats Paper"
        }
    }

    if (playerSelect === "paper") {
        let x = compSelect;
        switch (x) {
            case "rock":
                return "You Win! Paper beats Rock"
            case "scissor":
                return "You Lose! Scissors beats Paper"
            case "paper":
                return "Tie!"
        }
    } else {
        return "Please us either rock, paper or scissors as your choice."
    }
}

console.log(gameRound("PaPper"));
