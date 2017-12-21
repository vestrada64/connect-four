var players = {
    '1': 'red',
    '-1': 'pink',
    'null': 'white'
};

var board, turn, win, msgEl;

var msgEl = document.getElementById('message');

document.querySelector('table').addEventListener('click', function (evt) {
    var colIdx = parseInt(evt.target.getAttribute('data-col'));
    var column = board[colIdx];
    column[column.indexOf(null)] = turn;
    turn *= -1;
    win = getWinner();
    render();
});

document.querySelector("button").addEventListener('click', function(evt) {
    initialize();
    render();
});

function initialize() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null] 
    ]; 
    turn = 1;
    win = null;
}

function render () {
board.forEach(function(colArr, idx) {
    var cells = document.querySelectorAll(`[data-col="${idx}"]`)
    for( var i =0; i < cells.length; i++) {
        cells[5 - i].style.backgroundColor =
        players[board[idx][i]]
    }
    if (win) {
        msgEl.innerHTML = `Winner is ${players[win]}!`;
    } else {
        msgEl.innerHTML = `Player ${players[turn]}'s Turn!`;
    }

})};

function getWinner() {
    var winner = null;
    for (var col = 0; col < board.length; col++) {
        winner = getColumnWinner(col);
        if (winner) break;
    }
    return winner;
}

function getColumnWinner(colIdx) {
    var winner; 
    var colArr = board[colIdx];
    winner = checkVert(colArr);
    if (winner) return winner;
    winner = checkHorz(colIdx);
    if (winner) return winner;
    winner = checkDiag(colIdx, 1);
    if (winner) return winner;
    winner = checkDiag(colIdx, -1);
    if (winner) return winner;
    return null;
}

function checkVert(colArr) {
    for (var row = 0; row < 3; row++) {
        if (Math.abs(colArr[row] + colArr[row + 1] + colArr[row + 2] + colArr[row + 3]) === 4) return colArr[row];
    }
    return null;
}

function checkHorz(colIdx) {
    if (colIdx > 3) return null;
    for (var row = 0; row < 7; row++) {
        if (Math.abs(board[colIdx][row] + board[colIdx +1][row] + board[colIdx + 2][row] + board[colIdx + 3][row]) === 4) return board[colIdx][row];
    }
    return null;
}

function checkDiag(colIdx, offset) {
    if (colIdx > 3) return null;
    for (var row = 0; row < 7; row++) {
        if ((offset === 1 && row > 2) || (offset === -1 && row < 3)) break;
        if (Math.abs(board[colIdx][row] + board[colIdx + 1][row + offset] + board[colIdx + 2][row + offset * 2] + board[colIdx + 3][row + offset * 3]) === 4) return board[colIdx][row];
    }
    return null;
}

initialize();
render();
