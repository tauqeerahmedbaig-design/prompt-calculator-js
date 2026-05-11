function calculate() {
  let num1 = +prompt("Enter first number:");
  let num2 = +prompt("Enter second number:");

  let addition = num1 + num2;
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;

  alert(
    "Addition: " + addition +
    "\nSubtraction: " + subtraction +
    "\nMultiplication: " + multiplication +
    "\nDivision: " + division
  );
}