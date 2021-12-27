function narcissistic(value) {
    let power = value.toString().length;
    let valueArray = Array.from(value.toString());
    let poweredValue = valueArray.reduce((prev, currentValue)=>{
        return parseInt(prev) + Math.pow(currentValue, power)
    },0)
    return (poweredValue == value);
  }
  console.log(narcissistic(7));