const displayInput = document.getElementsByName('display')[0];
const buttons = document.querySelectorAll('input[type="button"]')



const displayOrCalc = (e) => {
    if (e.target.value === '=') {
        if (displayInput.value) {
            displayInput.value = eval(displayInput.value);
        }
    } else {
        if (e.target.value == 'C') {
            displayInput.value = '';
        } else if (e.target.value == '÷') {
            displayInput.value += '/';
        } else if (e.target.value == 'x') {
            displayInput.value += '*';
        } else {
            displayInput.value += e.target.value;
        }
    }
}

for (let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener('click',displayOrCalc)
}