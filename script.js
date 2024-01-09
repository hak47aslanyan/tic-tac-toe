const gameBody = document.getElementById("game-body");
const gameBoard = document.getElementById("game-board");

let board = ["", "", "", "", "", "", "", "", ""];
let isWIn = false;
function createBoard() {
  for (let i = 0; i < board.length; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", i);
    gameBoard.appendChild(square);
  }
}

createBoard();

let player = "X";
let result = document.getElementById("result");
let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function changeMarker(square) {
  if (player === "X") {
    square.innerHTML = "X";
    board[square.id] = "X";
    player = "O";
    square.style.color = "red";
  } else {
    square.innerHTML = "O";
    board[square.id] = "O";
    player = "X";
    square.style.color = "green";
  }
}

function checkWin() {
  for (let i = 0; i < winningCombination.length; i++) {
    let a = winningCombination[i][0];
    let b = winningCombination[i][1];
    let c = winningCombination[i][2];
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      result.innerHTML = `Winner is ${board[a]}`;
      isWin = true;
      setTimeout(() => {
        result.innerHTML = "";
        board = ["", "", "", "", "", "", "", "", ""];
        squares.forEach((square) => (square.innerHTML = ""));
      }, 3000);
      break;
    }
    isWIn ? "" : (result.innerHTML = `Next player is ${player}`);
  }
}

let squares = document.querySelectorAll(".square");
squares.forEach((square) =>
  square.addEventListener("click", (e) => {
    let position = e.target.id;
    if (board[position] === "") {
      changeMarker(e.target);
      checkWin();
    }
  })
);

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isWin = false;
  result.innerHTML = "";
  squares.forEach((square) => (square.innerHTML = ""));
});
