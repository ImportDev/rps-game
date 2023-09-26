// game
// rock beats scissors
// paper beats rock
// scissors beats paper

const select = ["rock","paper","scissors"];

let playerSelection = prompt("Select any one rock, paper or scissors")

playerSelection = playerSelection.toLowerCase();

function getComputerChoice() {
  const choice = select[Math.floor(Math.random() * select.length)];
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie."
  } else if (playerSelection == "rock" && computerSelection == "paper") 
    {computerScore++;
     return "You lose!! paper beats rock."
  } else if (playerSelection == "rock" && computerSelection == "scissors") 
    {playerScore++;
     return "you win!! rock beats scissors"
  } else if (playerSelection == "paper" && computerSelection == "rock") 
    {playerScore++;
     return "you win!! paper beats rock"
  } else if (playerSelection == "paper" && computerSelection == "scissors") 
    {computerScore++;
     return "you lose!! scissors beats paper"
  } else if (playerSelection == "scissors" && computerSelection == "rock") 
    {computerScore++;
     return "you lose!! rock beats scissors"
  } else if (playerSelection == "scissors" && computerSelection == "paper") 
    {playerScore++;
     return "you win!! scissors beats paper"
  } else {console.log("Invalid Selection..Choose only 1 from rock,paper or scissor.")
  }
}

function game() {
  // let computerSelection = getComputerChoice();
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
  }
}
game();

if (playerScore == computerScore) {
  alert ("You played 5 times. Turns out its a draw")
} else if (playerScore > computerScore) {
  alert ("You played 5 times and beat by winning " + playerScore +" " +"times.")
} else {
  alert ("You played 5 times and lost by opponent winning " + computerScore +" " +"times more.")
}