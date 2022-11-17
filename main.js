let eventArr = [];
let oper = '';

const screen = document.querySelector('.screen');
const display = document.createElement('div');
display.classList.add('display');
screen.appendChild(display);

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => clrCalc())

const zero = document.querySelector('.zero')
zero.addEventListener('click', () => numBtn(0))

const one = document.querySelector('.one')
one.addEventListener('click', () => numBtn(1))

const two = document.querySelector('.two')
two.addEventListener('click', () => numBtn(2))

const three = document.querySelector('.three')
three.addEventListener('click', () => numBtn(3))

const four = document.querySelector('.four')
four.addEventListener('click', () => numBtn(4))

const five = document.querySelector('.five')
five.addEventListener('click', () => numBtn(5))

const six = document.querySelector('.six')
six.addEventListener('click', () => numBtn(6))
  
const seven = document.querySelector('.seven')
seven.addEventListener('click', () => numBtn(7))
  
const eight = document.querySelector('.eight')
eight.addEventListener('click', () => numBtn(8))
  
const nine = document.querySelector('.nine')
nine.addEventListener('click', () => numBtn(9))

const quo = document.querySelector('.divide');
quo.addEventListener('click', () => divideBtn());

const prod = document.querySelector('.multiply');
prod.addEventListener('click', () => multiplyBtn());

const diff = document.querySelector('.subtract');
diff.addEventListener('click', () => subtractBtn());

const sum = document.querySelector('.add');
sum.addEventListener('click', () => addBtn());

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => calc(eventArr, oper));


function numBtn(num){
  if (typeof eventArr[eventArr.length - 1] !== 'number')
    display.textContent = ''
  display.textContent += num;
  eventArr.push(num)
}
function divideBtn() {
  if (oper) {
    calc(eventArr, oper);
    eventArr.splice(1)
    oper = '/';
  } else if ((!oper) && (eventArr.includes('*')
                      || eventArr.includes('/')
                      || eventArr.includes('-')
                      || eventArr.includes('+'))) {
    eventArr.splice(1)
  }
  eventArr.push('/');
  oper = '/';
}
function multiplyBtn() {
  if (oper) {
    calc(eventArr, oper);
    eventArr.splice(1)
    oper = '*';
  } else if (!oper && (eventArr.includes('*')
                    || eventArr.includes('/')
                    || eventArr.includes('-')
                    || eventArr.includes('+'))) {
    eventArr.splice(1)
  }
  eventArr.push('*');
  oper = '*';
}
function subtractBtn() {
  if (oper) {
    calc(eventArr, oper);
    eventArr.splice(1)
    oper = '-';
  } else if (!oper && (eventArr.includes('*')
                    || eventArr.includes('/')
                    || eventArr.includes('-')
                    || eventArr.includes('+'))) {
    eventArr.splice(1)
  }
  eventArr.push('-');
  oper = '-';
}
function addBtn() {
  if (oper) {
    calc(eventArr, oper);
    eventArr.splice(1)
    oper = '+';
  } else if (!oper && (eventArr.includes('*')
                    || eventArr.includes('/')
                    || eventArr.includes('-')
                    || eventArr.includes('+'))) {
  eventArr.splice(1)
  }
  eventArr.push('+');
  oper = '+';
}
function calc(arr, op) {
  if (!op) op = eventArr[1]
  let index = arr.indexOf(op)
  let first = arr.slice(0, index).join('')*1
  let second = arr.slice(index + 1).join('')*1
  let result;

  if (op === '/') result = first / second;
  if (op === '*') result = first * second;
  if (op === '-') result = first - second;
  if (op === '+') result = first + second;
  
  display.textContent = result;
  eventArr.splice(0, index)
  console.log(eventArr)
  eventArr.unshift(result)
  console.log(eventArr)
  oper = ''
}

function clrCalc() {
  display.textContent = ''
  eventArr.splice(0)
  oper = ''
}