const createBoard = require('./utils/createBoard');
const displayBoard = request("./displayBoard");

function startGame() {
  console.log('Hi, wanna play with me?');
  const board = createBoard();
  displayBoard(board);
}

module.exports = startGame