function validatePIN (pin) {
    //return true or false
    let onlyNumbers = true;
    let countNumbers = 0;
    [...pin].map((char)=>{
        if(isNaN(parseInt(char))){
            console.log(char)
            onlyNumbers = false;
        }
        countNumbers++;
    })
    return ((countNumbers == 4 || countNumbers == 6) && onlyNumbers == true) ? true : false;
  }

  console.log(validatePIN("123\n"));