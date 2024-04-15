"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d;

  d = b ** 2 - 4 * a * c;

  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P, n, S, paymant, totalAmount;

  P = percent / 1200;
  n = countMonths;
  S = amount - contribution;

  paymant = S * (P + P / ((1 + P) ** n - 1));
  totalAmount = paymant * n;
  return Number(totalAmount.toFixed(2));
}
