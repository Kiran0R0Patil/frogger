const timeLeftDisplay = document.querySelector('#time-left')
const resutDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.left-log')
const logsRight = document.querySelectorAll('.right-log')
const carsLeft = document.querySelectorAll('.left-car')
const carsRight = document.querySelectorAll('.right-car')

let currentIndex = 76;
let timerId 
let currentTime = 20
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

function autoMove(){
    currentTime--
    timeLeftDisplay.textContent = currentTime
    win()
    lose()
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
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

function moveCarLeft(carLeft){
    switch(true){
        case carLeft.classList.contains('cl1'):
            carLeft.classList.remove('cl1')
            carLeft.classList.add('cl2')
            break
        case carLeft.classList.contains('cl2'):
            carLeft.classList.remove('cl2')
            carLeft.classList.add('cl3')
            break 
        case carLeft.classList.contains('cl3'):
            carLeft.classList.remove('cl3')
            carLeft.classList.add('cl1')
            break
    }
}

function moveCarRight(carRight){
    switch(true){
        case carRight.classList.contains('cr1'):
            carRight.classList.remove('cr1')
            carRight.classList.add('cr3')
            break
        case carRight.classList.contains('cr2'):
            carRight.classList.remove('cr2')
            carRight.classList.add('cr1')
            break 
        case carRight.classList.contains('cr3'):
            carRight.classList.remove('cr3')
            carRight.classList.add('cr2')
            break
    }
}

function lose(){
    if(squares[currentIndex].classList.contains('cl1') || squares[currentIndex].classList.contains('l4') || squares[currentIndex].classList.contains('l5') || squares[currentIndex].classList.contains('cr1') || currentTime <= 0){
        clearInterval(timerId)
        resutDisplay.textContent = "You Lose"
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup',moveFrog)
    }
}

function win(){
    if(squares[currentIndex].classList.contains('ending-block')){
        clearInterval(timerId)
        resutDisplay.textContent = "You Won"
        document.removeEventListener('keyup',moveFrog)
    }
}

startPauseButton.addEventListener('click', () => {
    if(timerId){
        clearInterval(timerId)
        timerId = null
        document.removeEventListener('keyup', moveFrog)
    }
    else {
    timerId = setInterval(autoMove, 1000)
    document.addEventListener('keyup', moveFrog)
    }
})

