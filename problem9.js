function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// This algorithm is O(1) because it is just arithmetic and then an index that doesnt care about how long the rest of the array is
