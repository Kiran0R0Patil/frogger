const timeLeftDisplay = document.querySelector('#time-left')
const resutDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76;
// make a frog and track movement
function moveFrog() {
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)

console.log(squares)