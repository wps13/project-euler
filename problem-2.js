//Problem 2

//Find the sum of the even numbers in fibonnaci, until 4M

let actualNumber = 1;

let totalSum = 0;

let maxValue = 4000000;

let previousNum1 = 1;

let previousNum2 = 2;


while(actualNumber < maxValue) {
  actualNumber = previousNum1 + previousNum2;
  previousNum1 = previousNum2;
  previousNum2 = actualNumber;
  if(actualNumber % 2 === 0) {
    totalSum += actualNumber;
  }
}

console.log(`The sum of even numbers in fibonnaci is ${totalSum}`);