console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, '+name+'!';
}
// Remember to call the function to test
console.log( helloName('tormod'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber,secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber+secondNumber;
}
console.log(addNumbers(12,13));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3 ){
  return num1*num2*num3;
}
console.log(multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array.pop();
}
let somearray = ['ding','dong','dang','dim'];
console.log('pop last array item dim:' +getLast(somearray));
let someEmptyArray=[];
console.log('test empty array [], should say undefined: ' +getLast(someEmptyArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let arraylength = array.length;
  for(let i=0;i<arraylength;i++){
    if(value==array[i]){
      return true;
    }
  }
  
  
  return false;
}
let arrayOfValues = [10,11,12,13,14];
console.log('looking for 13 in array: should return true: '+find(13,arrayOfValues));
console.log('looking for 27 in array: should return false: '+find(27,arrayOfValues));
console.log('looking for hello in array: should return false: '+find('hello',arrayOfValues));
let emptyArray=[];
console.log('passing in empty array: should return false: '+find('hello',emptyArray));
let nonArray=0;
console.log('passing in non array: should return false: '+find('hello',nonArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter==string[0]){
    return true;
  }
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(arrayOfValuesToSum ) {
  let sum = 0
  // TODO: loop to add items
  for(let i =0; i<arrayOfValuesToSum.length;i++){
    sum+=arrayOfValuesToSum[i];
  }
  return sum;
}
let arraySomeNumbers = [10,10,10];
console.log('sum of 10 10 and 10 should be 30: '+ sumAll(arraySomeNumbers));
arraySomeNumbers = [-10,-10,-10];
console.log('sum of -10 -10 and -10 should be -30: '+ sumAll(arraySomeNumbers));
arraySomeNumbers = [];
console.log('sum of [] should be 0: '+ sumAll(arraySomeNumbers));
arraySomeNumbers = [10,10,'10'];
console.log('sum of 10, 10 and the string 10 should be 2010: '+ sumAll(arraySomeNumbers));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function returnNewArrayOfPositiveNumbersGreaterThanZero(inputArray){
  let arraylength = inputArray.length;
  let outputArray = [];
  for(let i =0;i<arraylength;i++){
    if(inputArray[i]>0){
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}
let arrayOfSomePositiveNumbers = [10,13,-5,'hello',5];
console.log('should return 10,13,5  '+returnNewArrayOfPositiveNumbersGreaterThanZero(arrayOfSomePositiveNumbers));
console.log('did old array change, should be [10,13,-5,\'hello\',5]    '+ arrayOfSomePositiveNumbers);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// from edabit, problem Convert Age to Days.
// create a function that takes the age in years and returns the age in days. Example:
// calcAge(65) to 23725, calcAge(0) to 0, calcAge(20) to 7300. Notes
// use 365 days as the lenght of a year for this challenge. Ignore leap years and days between last birthday and now. Expect only positive integer inputs.
function calcAgeFromYearsToDays(ageInYears){
  return ageInYears*365;
}
console.log(' 65 years should be 23725 days and is : '+ calcAgeFromYearsToDays(65));
console.log(' 0 years should be 0 days and is : '+ calcAgeFromYearsToDays(0));
console.log(' 20 years should be 7300 days and is : '+ calcAgeFromYearsToDays(20));