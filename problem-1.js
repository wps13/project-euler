// Problem 1

// Find the sum of all the multiples of 3 or 5 below 1000.

function sumMultiples() {
  let sum = 0;

  for (let num = 0; num < 1000; num++) {
    if (num % 3 === 0 || num % 5 === 0) sum += num;
  }
  return sum;
}

const totalSum = sumMultiples();

console.log(`The sum of multiples of 3 or 5 below 1000 is: ${totalSum}`);
