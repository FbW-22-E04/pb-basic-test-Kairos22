// Add answers here 
// 1.Los or New?

function nameOfCity(str){
    if(str.startsWith('New') || str.startsWith('Los')){
    return str;
    }
    else{
        return"The city name does not begin with Los or New";
    }
}
console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));
console.log('----------------------------------------1');

// 2.isDivisible?
function isDivisible(num) {
      if (num % 100 == 0) {
        result = true
      } else {
        result = false
      }
       
      return result
}
     console.log(isDivisible(1));
     console.log(isDivisible(1000));
     console.log(isDivisible(100));
     
     console.log('-----------------------------------2');

// 3.What's the weather?
function isRaining (result) {
    result = (isRaining(true) ? 'wet day - you need an umbrella' :  'leave your umbrella at home' );
}
console.log('result');
console.log('------------------------------------------3');

// Loops
// 1.Sequence
function geometricalSequence() {
for (let i = 0; i < 9; i++)
n = n * n;
    result = result + n ;
  }
  console.log(result);

console.log('----------------------------------Loops--1.Sequence');
// Math
function powerOf(int) {
  let powervalue = int ** int;
  return console.log(powervalue);
}
powerOf(3);
powerOf(4);
console.log('-----------------------------Math');
// Problem Solving 
function vowelCount(str) {
  let vowelCount = 0;

  
  let string = str.toString();

  for (let i = 0; i <= string.length - 1; i++) {

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

console.log(vowelCount("hello")); 
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));
console.log('----------------------Problem Solving');