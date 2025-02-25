//acquire numbers
let num1 = prompt("Please enter a number.")
let num2 = prompt("Please enter a second number. Your first number is " + num1)

//compare 
if (num1 == num2) {
    document.write("You entered the same number twice.")
}
else if (num1 > num2) {
    document.write(`Thanks. ${num1} is greater than ${num2}.`)
}
else {
    document.write(`Thanks. ${num2} is greater than ${num1}.`)
}