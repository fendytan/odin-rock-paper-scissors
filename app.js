const result_line1_div = document.getElementById("result-line1-display");
const result_line2_div = document.getElementById("result-line2-display");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const playerSelection_input = document.querySelectorAll("input");
const choices_div = document.querySelector(".choices");
const restart_div = document.querySelector(".restart");
const restart_input = document.getElementById("restart-input");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case "paperrock":
    case "scissorspaper":
    case "rockscissors":
      playerWon(playerSelection, computerSelection);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerWon(playerSelection, computerSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      nobodyWon(playerSelection, computerSelection);
      break;
  }

  updateScoreBoard();
  checkScore();
}

function playerWon(playerSelection, computerSelection) {
  playerScore++;
  result_line1_div.textContent = `Your ${playerSelection} beats my ${computerSelection}.`;
  result_line2_div.textContent = "You Win!";
  result_line2_div.classList.add("player-won");
}

function computerWon(playerSelection, computerSelection) {
  computerScore++;
  result_line1_div.textContent = `Your ${playerSelection} was beaten by my ${computerSelection}.`;
  result_line2_div.textContent = "You Lost!";
  result_line2_div.classList.add("computer-won");
}

function nobodyWon(playerSelection, computerSelection) {
  result_line1_div.textContent = `Your ${playerSelection} was countered by my ${computerSelection}.`;
  result_line2_div.textContent = "It's a Draw!";
}

function updateScoreBoard() {
  playerScore_span.textContent = playerScore;
  computerScore_span.textContent = computerScore;
}

function checkScore() {
  if (playerScore != 5 && computerScore != 5) return;

  choices_div.style.display = "none"; // Hide the rock paper scissors buttons
  restart_div.style.display = "flex"; // Show the restart button

  result_line2_div.classList.remove("player-won", "computer-won");

  result_line1_div.textContent =
    playerScore > computerScore ? "You Won This Round." : "You Lost This Round.";

  result_line2_div.textContent = "Play Again?";
}

function game(e) {
  result_line2_div.classList.remove("player-won", "computer-won");
  playRound(e.target.id, computerPlay());
}

function replayGame() {
  playerScore = computerScore = 0;
  updateScoreBoard();

  choices_div.style.display = "flex"; // Show the rock paper scissors buttons
  restart_div.style.display = "none"; // Hide the restart button

  result_line1_div.textContent = "First to score 5 points wins the game.";
  result_line2_div.textContent = "Choose Your Weapon!";
}

function main() {
  playerSelection_input.forEach(playerSelection => {
    playerSelection.addEventListener("click", game);
  });

  restart_input.addEventListener("click", replayGame);
}

main();
