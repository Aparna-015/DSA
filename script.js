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










let a = [2, 3,811];
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





// ************************BBinary search for square root of a number***************



function squrateroot(x){



if(x<2)return x

let l=2;
let r=Math.floor(x/2);
while(l<=r){

let m=Math.floor((l+r)/2);

if(x==m**2){
  return m;
}else if(x<m**2)

{
  r=m-1
}else{

  l=m+1;
}




}
return r;
  
  } console.log(squrateroot(36));  