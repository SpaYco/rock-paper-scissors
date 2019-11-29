function computerPlay() {
    let choice = Math.floor(Math.random() * (3 - 1) ) + 1;
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
let humanScore = 0;
let computerScore = 0;
let currentGame;
function playRound(playerChoice){
    let computer = computerPlay();
    let player = playerChoice.toLowerCase();
    if ((player == "rock" && computer == "rock") || (player == "paper" && computer == "paper") || (player == "scissors" && computer == "scissors")){
        currentGame = "draw";
        return `it's a draw! you both chose ${player}`;
    }else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        currentGame = "won";
        return `good job! ${player} beats ${computer}`;
    }else {
        currentGame = "lost";
        computerScore++;
        return `better luck next time, ${computer} beats ${player}`;
    }
}

function game(humanChoice){
    if (humanScore == 5 || computerScore == 5){
        let lastHumanScore = humanScore;
        let lastComputerScore = computerScore;
        humanScore = 0;
        computerScore = 0;
        return `you ${currentGame} , the final score is ${lastHumanScore} for you and ${lastComputerScore} for the computer`;
    } else {
       return playRound(humanChoice);
    }
    
}
