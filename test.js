function multiply(a){
    
   let product = a;
   function innerMultiply(b){
     product *= b;
     return innerMultiply;
   }

   innerMultiply.valueOf = () => product;
   innerMultiply.toString = () => product;

  return innerMultiply;
}

console.log(multiply(2,3,4)); 
console.log(multiply(2)(3)(4));