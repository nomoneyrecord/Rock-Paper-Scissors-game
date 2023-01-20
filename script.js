const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  compuer: 0
}

//Play game
function play(e){
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  console.log(playerChoice, computerChoice, winner);
}
 //Get computers choice
function getComputerChoice() {
  const rand = Math.random();
  if(rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Get game winner
function getWinner(p, c) {
  if(p === c) {
    return "draw";
  } else if(p === "rock") {
    if(c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if(p === "paper") {
    if(c === "scissor") {
      return "computer";
    } else {
      return "player";
    }
  } else if(p === "scissor") {
    if(c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if(winner === "player") {
    scoreboard.player++;
    result.innerTEXT = `
      <h1 class="text-win">You Win</h1>
      <`
  }
}

//Event listeners
choices.forEach(choice => choice.addEventListener("click", play));

