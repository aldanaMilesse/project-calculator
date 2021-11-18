// variables 
let firstValue = ''; 
let secondValue = '';
let operator = ''; 

// function add, subtract, multiply and divide 
function add (){
    firstValue = firstValue + secondValue;
    secondValue = '';
    return input.value = firstValue;
};

function subtract(){
    firstValue = firstValue - secondValue;
    secondValue = '';
    return input.value = firstValue; 
};

function multiply(){
    firstValue = firstValue * secondValue;
    secondValue = '';
    return input.value = firstValue;
};

function divide (){
    let total = firstValue / secondValue;
    if(total === Infinity){
        firstValue ='';
        secondValue  ='';
        operator= '';
        return input.value = "ERROR divided by 0";
    }
    else {
        firstValue = total;
        redondear();
        secondValue = '';
        return input.value = firstValue;
    }
};

// fuction operate that when pressing the "=" calls the operations add, subtract, multiply and divide 
function operate (){
    numberConvertion();
    if (operator === "+") return add();
    if (operator === "-") return subtract();
    if (operator === "*") return multiply();
    if (operator === "/") return divide();
};

// fuction clear 
function clear(){
    operator = '';
    firstValue = '';
    secondValue = ''; 
    return input.value = ""; 
}

// DOM
const buttonNum = document.querySelectorAll(".num");
const buttonSimb = document.querySelectorAll (".simb");
const input = document.querySelector(".textbox");
//const buttonPunto = document.querySelectorAll("#.");

// event click number (no puedo poner numeros + de una cifra)
buttonNum.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(operator == ''){
            if(input.value.length < 10){
                firstValue += e.target.id;
                return  input.value = firstValue;
            }
            
        }
        else {
            if (secondValue.length <10){
                secondValue += e.target.id;
                return input.value = secondValue; 
            }
        }
    });
}); 

// event click simb 
buttonSimb.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.id === "=") return operate (firstValue, secondValue, operator);
        else if (button.id === "clear") return clear ();
        else if(button.id === "delete") return deleteCalculator();
        else if(operator !=''){
            if(secondValue == '') {
                operator = e.target.id;
                return probar();
                //return input.value = num1 +''+operador;
            }
            else {
                operate();
                operator = e.target.id
                return probar();
                //return input.value = num1 +''+ operador;
            }
            
        }
        else {
            operator = button.id;
            return probar();
            //return input.value =  num1 +''+ operador;
        }
    })
}) 

// fuction convertir num1 en number
function numberConvertion (){
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);
}

// function delete
function deleteCalculator(){
    if (input.value === '') return clear();
    else if (input.value === firstValue){
        input.value = input.value.slice(0, -1);
        firstValue = input.value;
        return firstValue;
    }
    else {
        input.value = input.value.slice(0, -1);
        secondValue = input.value;
        return secondValue;
    };
};

//probando 
function probar (){    
    return input.value = firstValue + operator + secondValue; 
} 

// function para redondear
function redondear (){
    firstValue = firstValue.toFixed(2);
}

// function button "."
/* buttonPunto.addEventListener('click', (e) => {
    if(input.value.includes('.'))
    {
        button.disabled = false;
    }
})*/ 