//Problem 3 

// Find the largest prime factor of the number 600851475143

let largestFactor = 1;

let factor = 1;

let number = 600851475143;

while(factor < number) {
  factor+=2;
  if(number % factor === 0) {
    largestFactor = factor;
  }
}

console.log(largestFactor);