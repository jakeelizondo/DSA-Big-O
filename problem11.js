function howManyMovesToSolve(num) {
  if (num === 3) {
    return 7;
  }

  return howManyMovesToSolve(num - 1) * 2 + 1;
}

console.log(howManyMovesToSolve(5));

function printMove(start, end) {
  console.log(`Move disk from tower ${start} to tower ${end}`);
}

function playHanoi(n, start, end) {
  if (n === 1) {
    printMove(start, end);
  } else {
    let other = 6 - (start + end);
    playHanoi(n - 1, start, other);
    printMove(start, end);
    playHanoi(n - 1, other, end);
  }
}

playHanoi(3, 1, 3);
