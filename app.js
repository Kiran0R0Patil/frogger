const timeLeftDisplay = document.querySelector('#time-left')
const resutDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause')
const squares = document.querySelectorAll('.grid div')

// make a frog and track movement
function moveFrog() {
    console.log('moved')
}
document.addEventListener('keyup', moveFrog)

console.log(squares)