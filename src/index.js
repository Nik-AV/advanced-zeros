module.exports = function getZerosCount(number, base) {
  // your implementation
  let prost = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; 
  let nul = [];
  let zeroes = [];
  let rez = [];
  for (let i = 0; i < prost.length; i++)
  { 
    let count = 0;
    if(base == 1) break;
    while (base%prost[i]==0)
    {
      base/=prost[i];
      count++
      if (base%prost[i] != 0){
        nul.push([prost[i],count]);
      }
    } 
  } 
  for (let j = 0; j<nul.length; j++) 
  {
    let zc = 0;
    let a = 1;
    while (nul[j][0]**a <= number)
    {
      zc+=Math.floor(number/nul[j][0]**a++);
    }
    zeroes.push(zc);
  }
  
  for (let i = 0; i<nul.length; i++)
  {
     rez.push(Math.floor(zeroes[i]/nul[i][1]));
  }
  rez.sort((a,b)=> a-b);
  return rez[0];
}
  