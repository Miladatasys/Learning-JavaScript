console.log("Hello World");

// in-line comment /*multi-line comment*/

/* Data types: 
undefined, null, boolean, string, symbol, number and object*/

/* Variables in JavaScript can be declared using var( Can be used anywhere, can be changed, and is moved to the top when the code runs), let( Limited to a specific area, can be changed, and is also moved to the top when the code runs), or const(Limited to a specific area, cannot be changed once set, and is also moved to the top when the code runs). Assignment operator = // Variables and functions names are case sensitive */

/****
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
****/

var MyName = "Mila";
MyName = 8

let OurName = "Data";
console.log("OurName");

const pi = 3.14;

var a;
var b = 2;
console.log(a);

var c;
var d = 1;
console.log(c);
 
a = 7;

b = a;
console.log(a);

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";
// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";

// Declarations
var StUdLyCapVar;
var properCamelCase;
var TitleCaseOver;

// Assignments
StUdLyCapVar = 10;
properCamelCase = " A String";
TitleCaseOver = 9000;

// Operators
var sum = 10 + 10;
console.log(sum);

var difference = 45 - 33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

// Incrementing numbers
var myVar = 87;
myVar = myVar + 1;

var myNum = 25;
myNum++;
console.log(myNum);

// Decrementing Numbers
var myVar = 11;
myVar--;

// Decimal numbers
var ourDecimal = 5.7;
var myDecimal = 0.009;
console.log(myDecimal);

var product = 2.0 * 2.5;
console.log(product);

var quotient =4.4 / 2.0;
console.log(quotient);

// Finding a remainder
var remainder;
remainder = 11 % 3;

// Compound assignment with augmented addition
var a = 3;
var b = 17;
var c = 12;
a += 2;
b += 9;
c += 7;

var d = 11;
var e = 9;
var f = 3;
d -= 6;
e -= 15;
f -= 1;

var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= 3;
c *= 10;

var a =48;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;

// Declare string variables
var firstName = "Picard";
var lastName = "Data";

var myFirstName = "Ro";
var myLastName = " Laren";
console.log(myFirstName + myLastName);

// Escaping literal quotes in strings
var myStr = "I am a \"double quoted\" string inside double quotes"
console.log(myStr);

// Quoting strings with singles quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

// Escape sequences in strings
var myStr = "FirstLine\n\t\SecondLine\nThirdLine"
console.log(myStr);

// Concatenating strings with plus operator
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var myStr = "This is the start. " + "this is the end";
console.log(myStr);

// Concatenating strings with plus equals operator
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. "
myStr += "This is the second sentece."

// Constructing strings with variables
var ourName = "MilaDatasys ";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

var myName = "Mila! ";
var myStr = "My name is " + myName + "Welcome aboard"
console.log(myStr);

var anAdjective = "Awesome";
var ourStr = "Miladatasys is ";
ourStr += anAdjective;

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Find length of string
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastName = "Lovelace";
lastNameLength = lastName.length;

// Bracket notation to find first and third character in string
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[2];

// String Immutability
var myStr = "Jello World";
myStr = "Hello World";

// Bracket notation to find last character in string 
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length -1];
console.log(lastLetterOfFirstName);

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length -1];
console.log(lastLetterOfLastName);

var firstName = "Anastasia";
var firstLetterOfFirstName = firstName[firstName.length -1];
console.log(firstLetterOfFirstName);


// Bracket notation to find nth-to-last character in string
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length -3];
console.log(thirdToLastLetterOfFirstName);

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length -2];
console.log(secondToLastLetterOfLastName);

// Word blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = "";
  result += "The " + myAdjective + "" + myNoun + "" + myVerb + "to the store " + myAdverb;
  return result;
}
console.log(wordBlanks("dog ", "big ", "ran ", "quickly"));

console.log(wordBlanks("bike" , "slow ", "flew ", "slowly "));

 // Store multiple values with arrays
var ourArray = ["Fringe", 36];
console.log(ourArray);

var myArray = ["Dewey", 1];
console.log(myArray);

// Nested arrays
var ourArray = [["The universe", 42], ["everything", 101010]];
console.log(ourArray);

var myArray = [["Targaryen", 23], ["Stark", 45]];

// Acess Array data with indexes
var ourArray = [50,60, 70];
var ourData = ourArray[0]; // equals 50

var myArray = [90, 100, 110];

var myData = myArray[1];
console.log(myData);

// Modify array data with indexes
var ourArray = [18, 64, 99];
ourArray[1] = 3; // our arrays now is equals [18, 3, 99];

var myArray = [18, 65, 99];
myArray[0] = 45;
console.log(myArray)

// Access multi-dimensional arrays with indexes
var myArray = [[1,2,3], [4,5,6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[2][1];
console.log(myData);

// Manipulate arrays with push()
var ourArray = ["Alien", "Rocky", "Spaced"];
ourArray.push(["Blade Runner", "GTO", "Buffy the vampire slayer", "Golden boy"]);
console.log(ourArray)

var myArray = [["IT Crowd", 25], ["The Hobbit", 2]];
myArray.push(["Scent of a woman", 2])
console.log(myArray)

// Manipulate arrays with pop()
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

// Manipulate Array with shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

var myArray = [["John", 23], ["dog", 3]];
var removFromMyArray = myArray.shift();
console.log(myArray);

// Manipulate arrays with unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");
console.log(ourArray);

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray)

// Shopping List
var myList = [["cereal", 3], ["milk", 2], ["bananas", 6], ["orange juice", 1], ["eggs", 12]];
console.log(myList);

// Write Reusable Code with functions
function ourReusableFunction() {
  console.log("Hello World!");
}
ourReusableFunction();

function myReusableFunct () {
  console.log("Heyyya! World")
}
myReusableFunct();

// Passing values to functiones with arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5)

// Global Scope and functions
var myGlobal = 10;

function fun1(){
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + oopsGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
  fun1();
  fun2();
}
  
  // Local Scope and functions
function myLocalScope(){
  var myVar = 5;
  console.log(myVar)
}
myLocalScope();

// Global vs. Local scope in functions
var outerWear = "T-Shirt";
function myOutfit(){
  var outerWear = "sweater"

  return outerWear;
}
console.log(myOutfit());// it returned "sweater" because of the local var took precedence above the global var.
console.log(outerWear); //after the local we can still see the global one

// Return a value from a function with return
function minusSeven(num) {
  return num -7;
}
console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));

// Understanding undefined value returned from a function
var sum = 0;;
function addThree() {
  sum = sum + 3
}

function addFive(){
  sum += 5;
}

// Assignment with a returned value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// Stand in Line
