function add(a,b) {
    return a + b
  }
  
  function subtract(a,b) {
    return a - b
  }
  
  function divide(a,b) {
    return a / b
  }
  
  function multiply(a,b) {
    return a * b
  }
  
  function increment(n) {
    return n += 1
  }
  
  function decrement(n) {
    return n -= 1
  }
  
  function makeInt(string) {
    return parseInt(string, 10)
  }
  
  function preserveDecimal(string) {
    return parseFloat(string)
  }
add(5, 3);
subtract(10, 4);
divide(12, 3);
multiply(7, 2);
increment(8);
decrement(6);
makeInt("42");
preserveDecimal("3.14159");