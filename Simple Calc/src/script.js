
// const display = document.getElementById('display');


// function toCalculate(input){
//     display.value += input;
// }

// function clearNum() {
//     display.value = '';
// }

// function deleteNum() {
//     display.value = display.value.slice(0,-1);
// }

// function calculate() {
//     try{
//         display.value = eval(display.value);
//     }
//     catch(err) {
//         display.value="Invaild";
//     }
// }


const display = document.getElementById('display');

function toCalculate(input) {
    display.value += input;
}

function clearNum() {
    display.value = "";
}

function deleteNum() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Invalid";
    }
}