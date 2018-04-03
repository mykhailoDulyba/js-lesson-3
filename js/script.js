let display = document.getElementById('display');
let result = document.getElementById('result');
result.addEventListener('click', clickedRezult);
let clear = document.getElementById('clear');
clear.addEventListener('click', clickedClear);
let point = document.getElementById('point');
point.addEventListener('click', clickedPoint);
let value1;
let value2;
let operationType;
document.querySelectorAll('.number')
    .forEach(el => el.addEventListener('click', clickedNum));
function clickedNum(e) {
    const number = e.target.dataset.num;
    numberFunction(number);
}
function numberFunction(numb) {
    prn(numb);
}
document.querySelectorAll('.operation')
    .forEach(el => el.addEventListener('click', clickedOper));

function clickedOper(e) {
    operationType = e.target.dataset.oper;
    opperation(operationType);
}
function opperation(operationType) {
    value1 = display.value;
    display.value = '';
}
function clickedRezult(e) {
    value2 = display.value;
    display.value = '';
    let counted = eval(value1 + operationType + value2);
    prn(counted);
}
function clickedClear(e) {
    display.value = '';
}
function clickedPoint(e){
    let getPoint = e.target.dataset.point;
    prn(getPoint);
}
function prn(arg) {
    let calcDisplay = display.value += arg;
    return calcDisplay.innerHTML;
}

