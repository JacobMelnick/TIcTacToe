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

let player1 = true
let player2 = false


const firstMove = cells.map((spot, i) => {
    spot.addEventListener('click', (e) => {
        if (player1 === true) {
            spot.innerHTML = 'X'
            if (spot.innerHTML === 'X') {
                player1 = false
                player2 = true
            }
        }
    })
})
const secondMove = cells.map((spot, i) => {
    spot.addEventListener('click', (e) => {
        if (player2 === true) {
            spot.innerHTML = '0'
            if (spot.innerHTML === '0') {
                player1 = true
                player2 = false
            }
        }
    })
})
