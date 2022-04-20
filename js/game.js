let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']
let gameOver = 0 // 0 = running ----------- 1 = win ----------- 2 = draw
let winPosibility = null
let drawGame = null
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (gameOver === 1 || gameOver === 2) {
        return
    }

    if (board[position] == '') {

        board[position] = symbols[playerTime]

        if(isWin()){
            gameOver = 1
        } else if (isDraw()) {
            gameOver = 2
        }

        if (gameOver == 0) {
            playerTime = (playerTime == 0) ? 1 : 0
        }
    }

    return gameOver
}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            winPosibility = i

            return true
        }
    }
    return false
}

function isDraw(){
    const array = board.filter(item => {
        return item != ''
    })
    if(array.length === 9){
        return true
    }
    return false
}

function resetGame() {
    for (let i = 0; i < board.length; i++) {
        board[i] = ''
    }
    gameOver = 0
    playerTime = 0
}