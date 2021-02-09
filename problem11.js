function howManyMovesToSolve(num) {
  if (num === 1) {
    return 0;
  }

  return num + howManyMovesToSolve(num - 1);
}

console.log(howManyMovesToSolve(5));

// The above function will tell you how many moves it will take to solve the Tower of Hanoi problem where the input, num, is the number of plates you start with
