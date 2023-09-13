function receivesAFunction(callback) {
 callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("Testing")
  }  
  return namedFunction;
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log("Testing 1, 2")
    })
    
}
