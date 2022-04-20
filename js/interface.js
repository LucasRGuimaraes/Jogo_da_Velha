let countOWins = 0
let countXWins = 0
let countDraw = 0

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {

    let square = event.target
    let position = square.id
    const verification = handleMove(position)

    if (verification === 1) {

        switch (winPosibility) {
            case 0:
                var risk1 = document.getElementById('risk1')
                risk1.style.display = 'block'
                risk1.classList.add('transition')
                break;
            case 1:
                var risk2 = document.getElementById('risk2')
                risk2.style.display = 'block'
                risk2.classList.add('transition')
                break;
            case 2:
                var risk3 = document.getElementById('risk3')
                risk3.style.display = 'block'
                risk3.classList.add('transition')
                break;
            case 3:
                var risk4 = document.getElementById('risk4')
                risk4.style.display = 'block'
                risk4.classList.add('transition')
                break;
            case 4:
                var risk5 = document.getElementById('risk5')
                risk5.style.display = 'block'
                risk5.classList.add('transition')
                break;
            case 5:
                var risk6 = document.getElementById('risk6')
                risk6.style.display = 'block'
                risk6.classList.add('transition')
                break;
            case 6:
                var risk7 = document.getElementById('risk7')
                risk7.style.display = 'block'
                risk7.classList.add('transition')
                break;
            case 7:
                var risk8 = document.getElementById('risk8')
                risk8.style.display = 'block'
                risk8.classList.add('transition')
                break;
            default:
                risk1.style.display = 'none'
                risk2.style.display = 'none'
                risk3.style.display = 'none'
                risk4.style.display = 'none'
                risk5.style.display = 'none'
                risk6.style.display = 'none'
                risk7.style.display = 'none'
                risk8.style.display = 'none'
                break;
        }

        if (playerTime == 0) {
            countOWins += 1
            document.getElementById('oWins').innerHTML = `<p>&#128309;</p>${countOWins} wins`
            setTimeout(restartGame, 3500)
        } else {
            countXWins += 1
            document.getElementById('xWins').innerHTML = `<p>&#10060;</p>${countXWins} wins`
            setTimeout(restartGame, 3500)
        }
    }

    if (verification === 2){
        countDraw += 1
        document.getElementById('draws').innerHTML = `<p>&#9878;</p>${countDraw} draws`
        setTimeout(restartGame, 2000)
    }

    updateSquare()
}

function updateSquare() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class="${symbol} players"></div>`
        }
    })
}

function restartGame() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol != '') {
            let father = document.getElementById(position)
            let child = document.getElementsByClassName(symbol)
            father.removeChild(child[0])
        }
    })

    if (isWin()) {
        document.getElementById('risk1').style.display = 'none'
        document.getElementById('risk2').style.display = 'none'
        document.getElementById('risk3').style.display = 'none'
        document.getElementById('risk4').style.display = 'none'
        document.getElementById('risk5').style.display = 'none'
        document.getElementById('risk6').style.display = 'none'
        document.getElementById('risk7').style.display = 'none'
        document.getElementById('risk8').style.display = 'none'
    }

    resetGame()
}

function restartScoreBoard(){
    countOWins = 0
    countXWins = 0
    countDraw = 0

    document.getElementById('oWins').innerHTML = `<p>&#128309;</p>${countOWins} wins`
    document.getElementById('xWins').innerHTML = `<p>&#10060;</p>${countXWins} wins`
    document.getElementById('draws').innerHTML = `<p>&#9878;</p>${countDraw} draws`

    restartGame()
}