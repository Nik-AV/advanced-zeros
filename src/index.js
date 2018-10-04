module.exports = function getZerosCount(number, base) {
  // your implementation
  var prost = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]; 
  var nul = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
  var schet = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
  let a=base;
  let del=0;
  for(i=0;i<54;i++)
  { 
    if(a%prost[i]==0)
    { 
      a=a/prost[i]; 
      nul[i]+=1; 
      i--; 
    } 
  } 
  for(j=2; j<=number;j++)
  {
    for(i=0;i<54;i++)
    {
      if (nul[i]>0)
      {
        
       del=j;
        while(del%prost[i]==0)
        {
          del=del/prost[i];
          schet[i]+=1;
        }
      }
    }
  }
  for(i=0;i<54;i++)
  {
    if(nul[i]>0)
    {
      schet[i]=schet[i]/nul[i];
    }
  }
  let max=0;
  for(i=0;i<54;i++)
  {
    if(schet[i]>max)
    {
      max=schet[i];
    }
  }
  let min=max;
  for(i=0;i<54;i++)
  {
    if(schet[i]<min && schet[i]>0)
    {
      min=schet[i];
    }
  }
  return Math.floor(min);
}