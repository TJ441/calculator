let first = ''
let second = ''
let oper = ''
let repeatOp = ''
let repeatSecond = ''

const screen = document.querySelector('.screen');
const display = document.createElement('div');
display.classList.add('display');
screen.appendChild(display);

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => clrCalc())

const backspace = document.querySelector('.delete')
backspace.addEventListener('click', () => backSpace())

const zero = document.querySelector('.zero')
zero.addEventListener('click', () => numBtn(0))
zero.addEventListener('click', () => numDisplay(0))

const one = document.querySelector('.one')
one.addEventListener('click', () => numBtn(1))
one.addEventListener('click', () => numDisplay(1))

const two = document.querySelector('.two')
two.addEventListener('click', () => numBtn(2))
two.addEventListener('click', () => numDisplay(2))

const three = document.querySelector('.three')
three.addEventListener('click', () => numBtn(3))
three.addEventListener('click', () => numDisplay(3))

const four = document.querySelector('.four')
four.addEventListener('click', () => numBtn(4))
four.addEventListener('click', () => numDisplay(4))

const five = document.querySelector('.five')
five.addEventListener('click', () => numBtn(5))
five.addEventListener('click', () => numDisplay(5))

const six = document.querySelector('.six')
six.addEventListener('click', () => numBtn(6))
six.addEventListener('click', () => numDisplay(6))
  
const seven = document.querySelector('.seven')
seven.addEventListener('click', () => numBtn(7))
seven.addEventListener('click', () => numDisplay(7))

const eight = document.querySelector('.eight')
eight.addEventListener('click', () => numBtn(8))
eight.addEventListener('click', () => numDisplay(8))
  
const nine = document.querySelector('.nine')
nine.addEventListener('click', () => numBtn(9))
nine.addEventListener('click', () => numDisplay(9))

const prod = document.querySelector('.multiply');
prod.addEventListener('click', () => operBtn('*'));

const quot = document.querySelector('.divide');
quot.addEventListener('click', () => operBtn('/'));

const sum = document.querySelector('.add');
sum.addEventListener('click', () => operBtn('+'));

const diff = document.querySelector('.subtract');
diff.addEventListener('click', () => operBtn('-'));

const negative = document.querySelector('.negative');
negative.addEventListener('click', () => makeNeg());

const decimal = document.querySelector('.period');
decimal.addEventListener('click', () => numBtn('.'))
decimal.addEventListener('click', () => numDisplay('.'))

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => equalBtn())

function numBtn(num) {
  if (typeof first === 'number' && !oper) clrCalc()
  if (!oper) first += num;
  else second += num;
}

function numDisplay(num) {
  if (!oper) display.textContent += num;
  if (oper && (second.length == 1))
    display.textContent = num;
  else if (oper && second)
    display.textContent += num;
}

function operBtn(op) {
  display.textContent += op
  if (oper) solve(first, oper, second)
  repeatSecond = ''
  oper += op
}

function equalBtn() {
  if (!oper && !repeatOp) display.textContent = first
  else if (first && oper && !second) {
    second = first
    solve(first, oper, second)
  }
  else if (!second) solve(first, repeatOp, repeatSecond)
  else solve(first, oper, second)
}

function solve(x, op, y) {
  let a = (x * 1)
  let b = (y * 1)
  let result;

  if (op === '+') result = a + b
  if (op === '*') result = a * b
  if (op === '/') result = a / b
  if (op === '-') result = a - b
  
  display.textContent = result.toFixed(3) * 1;
  setNext(result, op)
}

function setNext(result, op) {
  repeatSecond += second;
  second = ''
  oper = ''
  first = result
  repeatOp = op;
}

function makeNeg() {
  if (!first) first += '-'
  if (oper) second += '-'
  display.textContent += '-'
}

function backSpace() {
  let backspaced = ''
  if (!oper) {
    backspaced = first.slice(0, -1)
    display.textContent = backspaced
    first = backspaced
  }
  if (oper && !second) {
    oper = ''
    display.textContent = first
  }
  if (first && oper && second) {
    backspaced = second.slice(0, -1)
    display.textContent = backspaced
    second = backspaced
  }
}

function clrCalc() {
  display.textContent = ''
  first = ''
  second = ''
  oper = ''
  repeatOp = ''
  repeatSecond = ''
}