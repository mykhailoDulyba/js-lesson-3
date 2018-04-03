let display = document.getElementById('display');
let result = document.getElementById('result');
result.addEventListener('click', clickedRezult);
let clear = document.getElementById('clear');
clear.addEventListener('click', clickedClear);
let value1;
let value2;
let operationType;
document.querySelectorAll('.Number')
    .forEach(el => el.addEventListener('click', clickedNum));

function clickedNum(e) {
    const number = e.target.dataset.num;
    numberFunction(number);
}

function numberFunction(numb) {
    if (display.value) {
        display.value = '';
    }
    prn(numb);
}
document.querySelectorAll('.operation')
    .forEach(el => el.addEventListener('click', clickedOper));

function clickedOper(e) {
    operationType = e.target.dataset.oper
    opperation(operationType);
}

function opperation(operationType) {
    value1 = +(display.value);
    if (value1 > 0) {
        console.log(value1);
        display.value = '';
    }
    prn(operationType);
}

function clickedRezult(e) {
    value2 = display.value;
    display.value = '';
    if (value2 > 0) {
        let counted = eval(value1 + operationType + value2);
        prn(counted);
    }
    else { prn('Enter number') }
}

function clickedClear() {
    display.value = '';
}

function prn(arg) {
    let dis = display.value += arg;
    return dis.innerHTML;
}


// function opperation(operationType) {
//      value1= +(display.value);
//      if(value1>0){
//          console.log(value1);
//          display.value = '';
//      }else {
//          prn(operationType)
//     }
// }

// function opperation(operationType) {
//      value1= +(display.value);
//      if(value1>0){
//          console.log(value1);
//          display.value = '';
//      }prn(operationType)
//     }
// }