function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n) because the for loop is O(n) and the arithmetic is O(1) so O(1n) = O(n)
