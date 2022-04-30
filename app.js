const timeLeftDisplay = document.querySelector('#time-left')
const resutDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76;
// make a frog and track movement
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')
    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex % 9 !== 0){
            currentIndex --
            }
            break
        case 'ArrowRight':
            if((currentIndex+1) % 9 !== 0 ){
            currentIndex++
            }
            break
        case 'ArrowUp':
            if(currentIndex > 8){
            currentIndex -= 9
            }
            break
        case 'ArrowDown':
            if(currentIndex < 72){
                currentIndex += 9
            }
            break
    }
    console.log(currentIndex)
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)
