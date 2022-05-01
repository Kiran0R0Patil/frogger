const timeLeftDisplay = document.querySelector('#time-left')
const resutDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.left-log')
const logsRight = document.querySelectorAll('.right-log')

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



function autoMoveLogs(){
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
}

function moveLogLeft(logLeft){
    switch(true){
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}

function moveLogRight(logRight){
    switch(true){
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
    }
}

setInterval(autoMoveLogs, 1000)