function tribonacci(signature,n){
    let tribonacciArr = [...signature];
    
    for(let i=3;i<n;i++){
      let triLength = tribonacciArr.length
      
      let first = tribonacciArr[triLength-3];
      let second = tribonacciArr[triLength-2];
      let last = tribonacciArr[triLength-1];
      tribonacciArr.push(first+second+last);
    }
    return tribonacciArr.slice(0,n)
  }