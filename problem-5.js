// Problem 5

// smallest positive number that is evenly divisible by all of the numbers from 1 to 20

let smallestNum = 0;

let maxNum = 20;

let minNum = 1;

let amountDivisible = 0;

do{
  for (let i=1;i <= 20; i++) {
    if(smallestNum % i === 0) {
      amountDivisible++;
      console.log(amountDivisible);

    }
  }
  smallestNum++;
} while(amountDivisible < 20)

console.log(smallestNum);