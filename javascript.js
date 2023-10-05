let playerSelection;
const select = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = select[Math.floor(Math.random() * select.length)];
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose!! Paper beats rock.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win!! Rock beats scissors.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win!! Paper beats rock.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lose!! Scissors beats paper.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lose!! Rock beats scissors.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win!! Scissors beats paper.";
  } else {
    console.log("Invalid Selection. Choose only one from rock, paper, or scissor.");
  }
}

function playGame() {
  const computerSelection = getComputerChoice();
  const resultMessage = playRound(playerSelection, computerSelection);

  const resultElement = document.createElement("p");
  resultElement.textContent = resultMessage;
  document.body.appendChild(resultElement);

  const scoresElement = document.createElement("p");
  scoresElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  document.body.appendChild(scoresElement);

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  if (playerScore === computerScore) {
    alert("It's a draw! Final Score - Player: " + playerScore + " | Computer: " + computerScore);
  } else if (playerScore > computerScore) {
    alert("Congratulations! You win! Final Score - Player: " + playerScore + " | Computer: " + computerScore);
  } else {
    alert("You lose! Final Score - Player: " + playerScore + " | Computer: " + computerScore);
  }
}


const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  playGame();
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  playGame();
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
  playGame();
});
