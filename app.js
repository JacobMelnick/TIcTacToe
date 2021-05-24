const cell1 = document.querySelector('#square1')
const cell2 = document.querySelector('#square2')
const cell3 = document.querySelector('#square3')
const cell4 = document.querySelector('#square4')
const cell5 = document.querySelector('#square5')
const cell6 = document.querySelector('#square6')
const cell7 = document.querySelector('#square7')
const cell8 = document.querySelector('#square8')
const cell9 = document.querySelector('#square9')

const cells = [
    cell1,
    cell2,
    cell3,
    cell4,
    cell5,
    cell6,
    cell7,
    cell8,
    cell9
]

let players = 0

const choices = {
    x: 'X',
    o: 'O'
}
//check for winning situations
const findWinner = (player) => {

    if (cell1.textContent === player && cell5.textContent === player && cell9 === player) {
        return 
    }
    if (cell3.textContent === player && cell5.textContent === player && cell7 === player) {
        return
    }
    if (cell1.textContent === player && cell2.textContent === player && cell3 === player) {
        return
    }
    if (cell4.textContent === player && cell5.textContent === player && cell6 === player) {
        return
    }
    if (cell7.textContent === player && cell8.textContent === player && cell9 === player) {
        return
    }
    if (cell1.textContent === player && cell4.textContent === player && cell7 === player) {
        return
    }
    if (cell2.textContent === player && cell5.textContent === player && cell8 === player) {
        return
    }
    if (cell3.textContent === player && cell6.textContent === player && cell9 === player) {
        return
    }

}
console.log(findWinner)

const handleClick = (e) => {
const currentSquare = e.target
//if the current spot is taken dont go to the next turn
if (currentSquare.textContent === choices.x || currentSquare.o) {
    return
}
// if someone has won then return
if (findWinner(choices.x) === true || findWinner(choices.o) === true) {
    return;
}

// handle turn
if (players % 2 === 0) {
    currentSquare.textContent = choices.x 
} else {
    currentSquare.textContent = choices.o
}

//handle winners

if (findWinner(choices.x)) {
    alert(`The Player ${choices.x} has won`)
} 
if (findWinner(choices.o)) {
    alert(`The Player ${choices.o} has won`)
}

// increment player by one to go to next players turn
players++

}

// assign a click listerner to each cell

const assignClick = (cell) => {
    cell.addEventListener('click', handleClick)
}

// assign that click to each cell
cells.forEach(assignClick)


// reset the game

const resetSquares = () => {
cells.map(cell => {
    cell.textContent = ""
})
}

document.getElementById('reset').addEventListener('click', () => {
    players = 0
    resetSquares()
})

