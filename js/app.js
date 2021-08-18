function getPin() {
    const pin = Math.round(Math.random()*10000)
    const pinString = pin.toString()
    if(pinString.length == 4) {
        return pin
    } else{
        return getPin()
    }
}

function generatePin(){
    document.getElementById('generate-input').value = getPin() 
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText
    const keyNumber = document.getElementById('key-numbers')
    if(isNaN(number)) {
        if(number == 'C') {
            keyNumber.value = ''
        }
    } else {
        const previousNumber = keyNumber.value
        const currentNumber = previousNumber + number
        keyNumber.value = currentNumber
    }
    
})

function varifyPin() {
    const pin = document.getElementById('generate-input').value
    const numbers = document.getElementById('key-numbers').value
    if(pin == numbers) {
        document.getElementById('match').style.display = "block"
        document.getElementById('not-match').style.display = "none"
    } else {
        document.getElementById('not-match').style.display = "block"
        document.getElementById('match').style.display = "none"
    }
}
document.getElementById('close').style.cursor = "pointer"
document.getElementById('right').style.cursor = "pointer"
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('not-match').style.display = "none"
})
document.getElementById('right').addEventListener('click', function(){
    document.getElementById('match').style.display = "none"
})