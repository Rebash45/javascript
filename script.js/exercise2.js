//Basic calculator
const operator=prompt("Enter operator (+, -, *, /): ");
const number1=parseFloat(prompt("Enter first number: "));
const number2=parseFloat(prompt("Enter second number: "));
let result;
if(number1 + number2){
    result=number1 + number2;
    alert(`${number1} + ${number2} = ${result}`);
}
else if(number1 - number2){
    result=number1 - number2;
    alert(`${number1} - ${number2} = ${result}`);
}
else if(number1 * number2){
    result=number1 * number2;
    alert(`${number1} * ${number2} = ${result}`);
}
else if(number1 / number2){
    result=number1 / number2;
    alert(`${number1} / ${number2} = ${result}`);
}
else{
    alert("Invalid operator");
}   
