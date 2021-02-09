function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// This function creates an array of the fibonacci sequence up to the nth number of the fibonacci sequence where n is the input into the compute function. This algorithm is complexity O(n) because it is a loop of n-1 loops where n is the input number. Therefore, the time complexity has a direct linear relationship with the size of the input.
