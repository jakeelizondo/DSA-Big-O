function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

// O(n^2) because the for loop is O(n) and there is another loop nested in it which is O(n), so O(n*n) = O(n^2)
