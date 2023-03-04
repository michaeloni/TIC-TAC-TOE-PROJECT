let rounds = 3;
let currentPlayer = "";
let squares = document.querySelectorAll(".square");
let player1 = 0;
let player2 = 0;

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (rounds > 0) {
      if (square.innerHTML == "") {
        changeCurrentPlayer();
        square.innerHTML = currentPlayer;
        setTimeout(checkWin, 1500);
        if (!checkWin()) {
          setTimeout(checkDraw, 1500);
        }
      }
    }
  });
});

function changeCurrentPlayer() {
  if (currentPlayer == "") {
    currentPlayer = "X";
  } else if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWin() {
  //Everytime i check win, you get the score of each players
  let player1Score = document.getElementById("player1Score");
  let player2Score = document.getElementById("player2Score");
  //get contend of each square
  let board = [
    [
      document.getElementById("0").innerHTML,
      document.getElementById("1").innerHTML,
      document.getElementById("2").innerHTML,
    ],
    [
      document.getElementById("3").innerHTML,
      document.getElementById("4").innerHTML,
      document.getElementById("5").innerHTML,
    ],
    [
      document.getElementById("6").innerHTML,
      document.getElementById("7").innerHTML,
      document.getElementById("8").innerHTML,
    ],
  ];
  //loop through the board to check win, if won, update the player score and reset the game then break out of the loop
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] == currentPlayer &&
      board[i][1] == currentPlayer &&
      board[i][2] == currentPlayer
    ) {
      updateScore(currentPlayer);
      decrementRound();
      clearBoard();
      changeCurrentPlayer();
      return true;
    }
    if (
      board[0][i] == currentPlayer &&
      board[1][i] == currentPlayer &&
      board[2][i] == currentPlayer
    ) {
      updateScore(currentPlayer);
      decrementRound();
      clearBoard();
      changeCurrentPlayer();
      console.log("here");
      return true;
    }
  }
  if (
    board[0][0] == currentPlayer &&
    board[1][1] == currentPlayer &&
    board[2][2] == currentPlayer
  ) {
    updateScore(currentPlayer);
    decrementRound();
    clearBoard();
    changeCurrentPlayer();
    return true;
  }
  if (
    board[0][2] == currentPlayer &&
    board[1][1] == currentPlayer &&
    board[2][0] == currentPlayer
  ) {
    updateScore(currentPlayer);
    decrementRound();
    clearBoard();
    changeCurrentPlayer();
    return true;
  }
}

function clearBoard() {
  //make all the squares empty
  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

function updateScore(player) {
  //update the score of the player
  if (player == "X") {
    player1++;
    player1Score.innerHTML = player1;
  } else if (player == "O") {
    player2++;
    player2Score.innerHTML = player2;
  }
}

function decrementRound() {
  rounds--;
}

function checkDraw() {
  let infoBoard = document.getElementById("info-board");
  let charLength = "";

  squares.forEach((square) => {
    charLength += square.innerHTML;
  });
  if (charLength.length == 9) {
    console.log("CCC");
    infoBoard.classList.add("active");
    setTimeout(resetGame, 1000);
    setTimeout(() => {
      infoBoard.classList.remove("active");
    }, 2000);
  }
}

function resetGame() {
  player2 = 0;
  player1 = 0;
  rounds = 3;
  squares.forEach((square) => {
    square.innerHTML = "";
  });
  currentPlayer = "";
  document.getElementById("player1Score").innerHTML = player1;
  document.getElementById("player2Score").innerHTML = player2;
}
