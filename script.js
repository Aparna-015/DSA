let array = [2, 7, 11, 15];
let target = 13;
let n = array.length;
for (i = 0; i < n - 1; i++) {
  for (j = i + 1; j < n; j++) {
    let sum = array[i] + array[j];
    if (sum == target) {
      console.log([i, j]);
    }
  }
}
