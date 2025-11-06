// let array = [2, 7, 11, 15];
// let target = 13;
// let n = array.length;
// for (i = 0; i < n - 1; i++) {
//   for (j = i + 1; j < n; j++) {
//     let sum = array[i] + array[j];
//     if (sum == target) {
//       console.log([i, j]);
//     }
//   }
// }









let a = [2, 3,8,11];
let target = 12;
let n = a.length;
map = {};

for (i = 0; i < n; i++) {
  map[a[i]] = i;
}

for (i = 0; i < n; i++) {
  let pairfind = target - a[i];

  if (map[pairfind] && map[pairfind] != i) {
    console.log([i, map[pairfind]]);
  }
}
