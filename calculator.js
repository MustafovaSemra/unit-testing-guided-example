function sum(a, b) {

  if (a===undefined && b===undefined){
    return 0
  } else if (a && b===undefined){
    return a+0
  }else {
    return a+b
  }
  

}

function subtract(a, b) {
  if (a===undefined && b===undefined){
    return 0
  } else if (a && b===undefined){
    return a-0
  }else {
    return a-b
  }
}

function divide(a, b) {
  if (a>0 && b>0){
    return a/b
  }
  if (a>0 && b===0){
    throw new Error ("Can`t divide by 0!")
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
