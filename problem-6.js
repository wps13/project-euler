// Problem 6

// Sum of squares and square of sumns of first one hundred natural numbers

let finalNumber = 1000;

let initialNumber = 1;

let actualNumber = 0;

let sumSquares = 0;

let squareSum = 0;

while(actualNumber <= finalNumber) {
  sumSquares+= (actualNumber^2);
  squareSum += actualNumber;
  actualNumber++;
}

squareSum = squareSum^2;

console.log(`The square of the sums is ${squareSum}`);

console.log(`The sum of the squares is ${sumSquares}`);