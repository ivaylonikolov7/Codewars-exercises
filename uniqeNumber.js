function findUniq(arr) {
    // do magic
    return arr.reduce((a, b)=>{
      return a^b;
    })
  }
  
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));