function playerRoll(c) {
  var x = document.getElementById("output");
  var z = computerRoll();
  if(c == 1) {
    if(z == 1) {
      //tie
      x.innerHTML = "Paper = Paper<br>Tie game!";
    }
    else if(z == 2) {
      //lose
      x.innerHTML = "paper -> SCISSORS<br>You lose!";
      updateScore(2);
    }
    else if(z == 3) {
      //win
      x.innerHTML = "PAPER <- rock<br>You win!";
      updateScore(1);
    }
  }
  if(c == 2) {
    if(z == 1) {
      //win
      x.innerHTML = "SCISSORS <- paper<br>You win!";
      updateScore(1);
    }
    else if(z == 2) {
      //tie
      x.innerHTML = "Scissors = Scissors<br>Tie game!";
    }
    else if(z == 3) {
      //lose
      x.innerHTML = "scissors -> ROCK<br>You lose!";
      updateScore(2);
    }
  }
  if(c == 3) {
    if(z == 1) {
      //lose
      x.innerHTML = "rock -> PAPER<br>You lose!";
      updateScore(2);
    }
    else if(z == 2) {
      //win
      x.innerHTML = "ROCK <- scissors<br>You win!";
      updateScore(1);
    }
    else if(z == 3) {
      //tie
      x.innerHTML = "Rock = Rock<br>Tie game!";
    }
  }
}

function computerRoll() {
  return Math.floor((Math.random() * 3) + 1);
}

function newGame() {
  var pScore = Number(0);
  var cScore = Number(0);
  var x = document.getElementById("output");
  var y = document.getElementById("playerScore");
  var z = document.getElementById("computerScore");
  x.innerHTML = "New Game";
  y.value = pScore;
  z.value = cScore;
}

function updateScore(w) {
  if(w == 1) {
    var ps = document.getElementById("playerScore").value;
    ps = Number(ps) + Number(1);
    document.getElementById("playerScore").value = ps;
  }
  else if(w == 2) {
    var cs = document.getElementById("computerScore").value;
    cs = Number(cs) + Number(1);
    document.getElementById("computerScore").value = cs;
  }
}

