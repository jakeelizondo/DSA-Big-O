function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// O(n) because the for loop will be O(n) and the conditional check on each will be O(1) so O(1n) = O(n)
