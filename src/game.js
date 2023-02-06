const createBoard = require('./utils/createBoard');

function startGame() {
  console.log('Hi, wanna play with me?');
  const board = createBoard();
  console.log(board);
}

module.exports = startGame