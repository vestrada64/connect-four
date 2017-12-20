/*------- constants --------*/
var players = {
    '1': 'red',
    '-1': 'pink',
    'null': 'white'
};

/*---------app's state (variables) -------*/
var board, turn, win;
/*---------- cached element references ------ */
var msgEl = document.getElementById('message');
/*---------- event listeners --------*/

/* Update the correct element in my board array */ 
document.querySelector('table').addEventListener('click', function (evt) {
    var colIdx = parseInt(evt.target.getAttribute('data-col'));
    var column = board[colIdx];
    column[column.indexOf(null)] = turn;
    console.log('cell clicked!')
    turn *= -1;
render();


});

// Reset button
document.querySelector("button").addEventListener('click', function(evt) {
    console.log("Reset button worked!")
    initialize();
    render();
});

// Update the correct element in board 

// Claim winner 

//render();

/*--------- functions ------*/

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

// Render gets the cells to show up the player selecting which cell they choose.
// Player 1 (red) will always go first once the game starts up
function render () {
board.forEach(function(colArr, idx) {
    var cells = document.querySelectorAll(`[data-col="${idx}"]`)
    for( var i =0; i < cells.length; i++) {
        cells[5 - i].style.backgroundColor =
        players[board[idx][i]]
    }
})};

/*--------- winner combinations -------*/ 
/* 
- 4 horizontal
- 4 vertical
- 4 diagnol */ 

// Init. 

initialize();
render();