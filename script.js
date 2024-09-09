
let count = 0;


let counterDisplay = document.getElementById('counter');
let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');
let resetButton = document.getElementById('reset');
incrementButton.style.background="yellow"
decrementButton.style.background="red"
resetButton.style.background="green"

function updateDisplay() {
    counterDisplay.textContent = count;
}
incrementButton.addEventListener('click',function(){
    count++
    updateDisplay()
})
decrementButton.addEventListener('click',function(){
    count--
    updateDisplay()
})
resetButton.addEventListener('click',function(){
    count=0
    updateDisplay()
})
