// const computerChoiceDisplay = document.getElementById("computer-choice");
// const userChoiceDisplay = document.getElementById("user-choice");
// const resultDisplay = document.getElementById("result");
// const possibleChoices = document.querySelectorAll("button");

const choices = ["rock", "paper", "scissors"];
let playerScore, computerScore;
// let userChoice = null;

// possibleChoices.forEach(possibleChoice =>
//   possibleChoice.addEventListener("click", e => {
//     userChoice = e.target.id;
//     computerChoiceDisplay.innerHTML = computerPlay();
//     userChoiceDisplay.innerHTML = userChoice;
//     playRound(userChoice, computerChoiceDisplay.innerHTML);
//   }),
// );

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let result;

  switch (playerSelection + computerSelection) {
    case "paperrock":
    case "scissorspaper":
    case "rockscissors":
      playerScore++;
      // resultDisplay.innerHTML = "YOU WIN";
      result = "You Win! " + playerSelection + " beats " + computerSelection;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerScore++;
      // resultDisplay.innerHTML = "YOU LOSE";
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      // resultDisplay.innerHTML = "IT'S A DRAW";
      result = "It's a Draw!";
      break;
  }
  // return resultDisplay.innerHTML;
  return result;
}

function game() {
  const playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
  const computerSelection = computerPlay();
  console.log("You chose " + playerSelection);
  console.log("Computer chose " + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}

playerScore = computerScore = 0;
for (let i = 0; i < 5; i++) {
  game();
  console.log("Player score is " + playerScore + " and computer score is " + computerScore);
}
