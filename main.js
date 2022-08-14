function add(a, b)
{
    return a + b;
} 
    
function subtract(a, b)
{
    return a - b;
}
    
function multiply(a, b)
{
    return a * b;
}
    
function divide(a, b)
{
    return (a / b);
}

function operate(operator, num1, num2)
{
    switch (operator)
    {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "X":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

function display(button)
{
    let calculation = [];
    if (button.className === 'num' || button.className === 'operation')
    {
        let display = document.querySelector(".display");
        display.append(button.innerHTML);
        calculation = display.innerHTML;
    }
}

function getNumber(array, button)
{   let fullNum = "";
    if (button.className === "num"){
        array.push(button.innerHTML);
    }
    array.forEach(num => fullNum += num)
    return fullNum;
}

function getOperation(button)
{
    let operation = "";
    if (button.className === "operation")
    {
        operation = button.innerHTML;
    }
    return operation;
}

function main()
{
    let buttons = document.querySelectorAll('button');
    let numArray = [];
    let firstNum = 0;
    let secondNum = 0;

    buttons.forEach(button => button.addEventListener('click',() => { 
        display(button);
        firstNum = getNumber(numArray, button);
        console.log(firstNum);
        console.log(getOperation(button));
    }));   
}
main();
