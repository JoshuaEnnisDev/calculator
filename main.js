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
            return add(num1, num2);
        case "-":
           return subtract(num1,num2);
        case "X":
            return multiply(num1,num2);
        case "/":
            return divide(num1, num2);
            
    }
}

function display(value)
{
    let display = document.querySelector(".display");

    if (typeof value === "number")
    {
        display.innerHTML = value;
        console.log(display.innerHTML);
        return;
    }
    
    else if (value.className === 'num' || value.className === 'operation')
    {
        
        display.append(value.innerHTML);
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
    let numArray1 = [];
    let numArray2 = [];
    let firstNum = 0;
    let secondNum = 0;
    let numOperations = 0;
    let result = 0;
    let operation = "";

    buttons.forEach(button => button.addEventListener('click',() => { 
        display(button);

        if(button.className === "operation")
        {
            numOperations++;
            console.log(numOperations);
            if (operation === "")
            {
                operation = getOperation(button).toString();
            }
        }
        
        if (numOperations === 0){
            firstNum = getNumber(numArray1, button);
        }
        else if (numOperations === 1)
        {
            secondNum = getNumber(numArray2, button);
        }
        else if (numOperations === 2)
        {
            result = operate(operation, parseInt(firstNum),parseInt(secondNum));
            display(result);
            console.log(operation); 
        }

        if(button.className ==="operation")
        {
            numOperations = 1;
            firstNum = parseInt(result);
            
        }
        else
        {
            display(result);
            numOperations = 0;
        }
    }));   
    
}
main();
