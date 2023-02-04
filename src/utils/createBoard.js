const createBowl = require('./createBowl');
const GAME_SETTING = require('../consts');

function createBoard() {
  const board = [];
  for (let i = 0; i < GAME_SETTING.COLUMN_COUNT; i++) {
    const row = [];
    for (let j = 0; j < GAME_SETTING.ROW_COUNT; j++) {
      row.push(createBowl());
    }
    board.push(row);
  }

  return board;
}

module.exports = createBoard
