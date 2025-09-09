const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")
let currentExpression = '';

function handleButton(button) {
    const value = button.target.textContent;
    if (value === 'AC') {
        display.textContent = display.textContent = 0
    } else if(value === '='){
        if(display.textContent.includes("%")){
            const proc = display.textContent.split("%")
            display.textContent = (proc[0]/100) * proc[1]
        } else{
            display.textContent = eval(display.textContent.replaceAll('×', "*").replaceAll("−","-").replaceAll("÷", "/"))
        }
    } else if(value === '%'){
        display.textContent = eval(display.textContent) + "%"
    } else if(value === '+/-'){
        display.textContent = display.textContent.replaceAll("−","-") * -1
    } else {
        if(display.textContent === '0'){
            display.textContent = value
        }else {
            display.textContent += value
        }
    }
}
buttons.forEach(button => {
    button.addEventListener('click', handleButton);
}); 