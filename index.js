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
     console.log('-----------------------------------2');

// 3.What's the weather?
function isRaining (result) {
    result = (isRaining(true) ? 'wet day - you need an umbrella' :  'leave your umbrella at home' );
}
console.log('result');

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

