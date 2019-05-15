const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var turn = 1
var matrixX = []
var matrixO = []
var winner = ''
var playerTurn = 'x'
var solution = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7']
]
var moves = ['1','2','3','4','5','6','7','8','9']
var line1 =['1','2','3']
var line2 =['4','5','6']
var line3 =['7','8','9']

var queryFunc = () => {
  rl.question(`Play your Move ${playerTurn}\n${line1}\n${line2}\n${line3}\n`, (answer) => {
    // TODO: Log the answer in a database
    if(!moves.includes(answer)){
      console.log('invalid move')
      queryFunc()
    }
    var move = ''
    if (answer.toLowerCase() === '1') {
      line1[0] = playerTurn
      move = '1'
    }
    if (answer.toLowerCase() === '2') {
      line1[1] = playerTurn
      move = '2'
    }
    if (answer.toLowerCase() === '3') {
      line1[2] = playerTurn
      move = '3'
    }
    if (answer.toLowerCase() === '4') {
      line2[0] = playerTurn
      move = '4'
    }
    if (answer.toLowerCase() === '5') {
      line2[1] = playerTurn
      move = '5'
    }
    if (answer.toLowerCase() === '6') {
      line2[2] = playerTurn
      move = '6'
    }
    if (answer.toLowerCase() === '7') {
      line3[0] = playerTurn
      move = '7'
    }
    if (answer.toLowerCase() === '8') {
      line3[1] = playerTurn
      move = '8'
    }
    if (answer.toLowerCase() === '9') {
      line3[2] = playerTurn
      move = '9'
    }
    if (playerTurn === 'o') {
      matrixO.push(move)
      //console.log(matrixO)
    }
    if (playerTurn === 'x') {
      matrixX.push(move)
      //console.log(matrixX)
    }
    for (var x = 0; x < solution.length; x++) {
      if (matrixX.includes(solution[x][0]) && matrixX.includes(solution[x][1]) && matrixX.includes(solution[x][2])) {
        winner = 'x'
      }
      if (matrixO.includes(solution[x][0]) && matrixO.includes(solution[x][1]) && matrixO.includes(solution[x][2])) {
        winner = 'o'
      }
    }
    if (turn === 9 || winner !== '') {
      if (winner !== '') {
        console.log(`winner is ${winner}`)
      }
      //console.log(turn)
      //console.log(matrixX)
      //console.log(matrixO)
      rl.close();
    }
    if (turn < 9 && winner === '') {
      if (playerTurn === 'x') {
        playerTurn = 'o'
      } else {
        playerTurn = 'x'
      }
      turn++
      queryFunc()
    }
  });
}
queryFunc()