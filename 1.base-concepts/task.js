"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  } else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let creditBody = amount - contribution;
  let percentBet = percent /= 1200;
  let paymant = creditBody * (percentBet + percentBet / ((1 + percentBet) ** countMonths - 1));
  let totalAmount = paymant * countMonths;
   
  return Number(totalAmount.toFixed(2));
}