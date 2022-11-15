let intArray = [];
let first = [];
let second = [];
let oper = ''
let swtch = ''

const screen = document.querySelector('.screen');
const display = document.createElement('div');
display.classList.add('display');
screen.appendChild(display);

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => clrCalc())

const zero = document.querySelector('.zero')
zero.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "0";
  intArray.push(0)
  swtch = ''
})

const one = document.querySelector('.one')
one.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''   
  display.textContent += "1"
  intArray.push(1)
  swtch = ''
})

const two = document.querySelector('.two')
two.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "2"
  intArray.push(2)
  swtch = ''
})

const three = document.querySelector('.three')
three.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "3"
  intArray.push(3)
  swtch = ''
})

const four = document.querySelector('.four')
four.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "4"
  intArray.push(4)
  swtch = ''
})

const five = document.querySelector('.five')
five.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "5"
  intArray.push(5)
  swtch = ''
})

const six = document.querySelector('.six')
six.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''  
  display.textContent += "6"
  intArray.push(6)
  swtch = ''
})
  
const seven = document.querySelector('.seven')
seven.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "7"
  intArray.push(7)
  swtch = ''
})
  
const eight = document.querySelector('.eight')
eight.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "8"
  intArray.push(8)
  swtch = ''
})
  
const nine = document.querySelector('.nine')
nine.addEventListener('click', () => {
  if (swtch === 'on')
    display.textContent = ''
  display.textContent += "9"
  intArray.push(9)
  swtch = ''
})

const quotient = document.querySelector('.divide');
quotient.addEventListener('click', () => divideBtn());

const product = document.querySelector('.multiply');
product.addEventListener('click', () => multiplyBtn());

const difference = document.querySelector('.subtract');
difference.addEventListener('click', () => subtractBtn());

const sum = document.querySelector('.add');
sum.addEventListener('click', () => addBtn());

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => calc());

function operate(num1, num2, oper) {
  let [a] = num1, [b] = num2;
  if (oper === '+') return add(a, b)
  if (oper === '-') return subtract(a, b)
  if (oper === '*') return multiply(a, b)
  if (oper === '/') return divide(a, b)
}
function divideBtn() {
  first.push(intArray.join('')*1);
  intArray.splice(0);
  oper = '/'
  swtch = 'on'
}
function multiplyBtn() {
  first.push(intArray.join('')*1);
  intArray.splice(0);
  oper = '*'
  swtch = 'on'
}
function subtractBtn() {
  first.push(intArray.join('')*1);
  intArray.splice(0);    
  oper = '-'
  swtch = 'on'
}
function addBtn() {
  first.push(intArray.join('')*1);
  intArray.splice(0);
  oper = '+'
  swtch = 'on'
}
function calc() {
  second.push(intArray.join('')*1)
  result = operate(first, second, oper)
  display.textContent = result;
  first.splice(0)
  second.splice(0)
  intArray.splice(0)  
}
function clrCalc() {
  intArray.splice(0)
  first.splice(0)
  second.splice(0)
  oper = ''
  swtch = ''
  display.textContent = ''
}
function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }