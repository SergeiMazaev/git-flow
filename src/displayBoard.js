const bowlTypeMatcher = {
  0: '+',
  1: '#',
  2: '@',
  3: '*',
  4: '$'
}

function displayBoard(board) {
  board.forEach((row) => {
    const preparedData = row.map((bowl) => bowlTypeMatcher[bowl.type])
    console.log(preparedData.join(' '))
  })
}

module.exports = displayBoard