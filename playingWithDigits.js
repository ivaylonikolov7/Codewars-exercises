function digPow(n, p){
    // ...
    let numberString = n.toString();
    let sum = 0;
    for(let i=0; i<numberString.length; i++){
        let currentNumber = parseInt(numberString[i]);
        sum+= Math.pow(currentNumber,(p+i));
    }
    if(sum%n==0){
        return sum/n;
    }
    else{
        return -1;
    }
  }
  