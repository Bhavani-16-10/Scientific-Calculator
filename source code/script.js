document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    let currentValue = "";
    function evaluateResult() {
        console.log('currentValue:',currentValue)
        const convertedvalue=currentValue
        .replace("×","*")
        .replace("÷","/")
        .replace("%","*0.01")
        console.log('convertedvalue:',convertedvalue)
        const result=eval(convertedvalue);
        currentValue=result.toString();
        display.value=currentValue;

    }
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;
            if (value == "AC") 
            {
                currentValue = "";
                display.value = currentValue;
            }
            else if(value=="=")
            {
                evaluateResult();
            }
            else {
                currentValue += value;
                display.value = currentValue;
            }


        })
    }
});