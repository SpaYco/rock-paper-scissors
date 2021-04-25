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
let rockSound = new Audio("./media/rock.mp3");
let scissorsSound = new Audio("./media/scissors.mp3");
let paperSound = new Audio("./media/paper.mp3");
function clickSound(entry){
    if (entry == "rock"){
        rockSound.play();
    }else if (entry == "paper"){
        paperSound.play();
    } else if (entry == "scissors"){
        scissorsSound.play();
    }
}
function playRound(playerChoice){
    let computer = computerPlay();
    let player = playerChoice.toLowerCase();
    clickSound(playerChoice);
    if ((player == "rock" && computer == "rock") || (player == "paper" && computer == "paper") || (player == "scissors" && computer == "scissors")){
        currentGame = "draw";
        return `it's a draw! you both chose ${player}`;
    }else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        humanScore++;
        currentGame = "won";
        return `good job! ${player} beats ${computer}`;
    }else if (player != "rock" && player != "paper" && player!= "scissors"){
        return "you enetered a wrong choice! please try again by typing either rock, paper or scissors";
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
function browserGame(input){
    let output;
    output = game(input);
    
    document.getElementById("answer").innerHTML = output;
}
