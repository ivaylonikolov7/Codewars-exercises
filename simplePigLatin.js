function pigIt(str){
    let result = str.split(/[, ]+/).map((el)=>{
        if(el == "") return " ";
        if(el == "!" || el == "?") return el;
        let char = el.charAt(0);
        return el.substring(1) + char + 'ay';
    }).join(' ');
    return result;
  }

  console.log(pigIt('Pig latin is cool    '))