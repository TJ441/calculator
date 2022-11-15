let intArray = [];
let firstNum = [];
let secondNum = [];
let oper = [];

const screen = document.querySelector('.screen');
const display = document.createElement('div');
display.classList.add('display');
display.textContent = "";
screen.appendChild(display);

const zero = document.querySelector('.zero')
zero.addEventListener('click', () => {
    display.textContent += "0";
    intArray.unshift(0)});

const one = document.querySelector('.one')
one.addEventListener('click', () => {
    display.textContent += "1"
    intArray.unshift(1)});

const two = document.querySelector('.two')
two.addEventListener('click', () => {
    display.textContent += "2"
    intArray.unshift(2)});

const three = document.querySelector('.three')
three.addEventListener('click', () => {
    display.textContent += "3"
    intArray.unshift(3)});

const four = document.querySelector('.four')
four.addEventListener('click', () => {
    display.textContent += "4"
    intArray.unshift(4)});

const five = document.querySelector('.five')
five.addEventListener('click', () => {
    display.textContent += "5"
    intArray.unshift(5)});

const six = document.querySelector('.six')
six.addEventListener('click', () => {
    display.textContent += "6"
    intArray.unshift(6)});

const seven = document.querySelector('.seven')
seven.addEventListener('click', () => {
    display.textContent += "7"
    intArray.unshift(7)});

const eight = document.querySelector('.eight')
eight.addEventListener('click', () => {
    display.textContent += "8"
    intArray.unshift(8)});

const nine = document.querySelector('.nine')
nine.addEventListener('click', () => {
    display.textContent += "9"
    intArray.unshift(9)});

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

function operate(num1, num2, op) {
  let [a] = num1, [b] = num2;
  let [oper] = op;
  if (oper === '+') return add(a, b)
  if (oper === '-') return subtract(a, b)
  if (oper === '*') return multiply(a, b)
  if (oper === '/') return divide(a, b)
}
function divideBtn() {
  firstNum.push(intArray.reverse()
                        .join('') * 1);
  intArray.splice(0);
  oper.splice(0,1,'/')
  display.textContent = ''
}
function multiplyBtn() {
  firstNum.push(intArray.reverse()
                        .join('') * 1);
  intArray.splice(0);
  oper.splice(0,1,'*')
  display.textContent = ''
}
function subtractBtn() {
  firstNum.push(intArray.reverse()
                        .join('') * 1);
  intArray.splice(0);    
  oper.splice(0,1,'-')
  display.textContent = ''
}
function addBtn() {
  firstNum.push(intArray.reverse()
                        .join('') * 1);
  intArray.splice(0);
  oper.splice(0,1,'+')
  display.textContent = ''
}
function calc() {
  secondNum.push(intArray.reverse()
                         .join('') * 1)
  result = operate(firstNum, secondNum, oper)
  display.textContent = result;
  firstNum.splice(0)
  secondNum.splice(0)
  intArray.splice(0)  
}
function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }