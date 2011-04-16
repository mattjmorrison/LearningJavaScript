/* redefining built in functions */
function alert(message){
    var content = document.getElementById('content');
    var message_node = document.createTextNode(message);
    var message_div = document.createElement("div");
    message_div.appendChild(message_node);
    content.appendChild(message_div);
}

alert("loaded external javascript file");
alert("global variable set on page was " + global_variable);

global_variable = "Does he?";

/* variables */
var someVar;
alert("someVar is an uninitialized variable with a value of: " + someVar);

/* comparisons */
var valueOne = 1;
alert("Value of valueOne: " + valueOne);
alert("Value of valueOne == 1: " + (valueOne == 1));
alert("Value of valueOne == '1': " +  (valueOne == '1'));
alert('Value of valueOne == "1": ' +  (valueOne == "1"));
alert("Value of valueOne === 1: " +  (valueOne === 1));
alert("Value of valueOne === '1': " +  (valueOne === '1'));
alert('Value of valueOne === "1": ' +  (valueOne === "1"));


/* conditions */
var valueTwo = 0;
if (valueTwo == 1){
    alert("valueTwo == 1 is true");
}
else if (valueTwo == 2){
    alert("valueTwo == 2 is true");
}
else {
    alert("valueTwo is unknown value");
}

switch (valueTwo){
    case 0:
        alert("valueTwo is 0");
        break;
    case 1:
        alert("valueTwo is 1");
        break;
    default:
        alert("unknown value");
}

alert(valueTwo == 0 ? "Zero" : "Not Zero");

if (valueTwo == 1 || true){
    alert("valueTwo == 1 or true");
}

if (valueTwo == 1 || false){
    alert("valueTwo == 1 or false");
}

if (valueTwo == 1 && true){
    alert("value == 1 and true");
}

if (valueTwo == 1 && false){
    alert("value == 1 and false");
}

if (valueTwo != 1){
    alert("valueTwo is not 1");
}

if (valueTwo !== 1){
    alert("valueTwo is not 1");
}

/* loops */
var valueThree = 0;
while (valueThree < 1){
    valueThree++;
    alert("Inside While Loop!");
}

do {
    alert(valueThree + " in do while loop");
} while (valueThree < 0);

for (var counter=0;counter<1;counter++){
    alert("inside for loop");
}

/* functions */

function someFunc(){
    alert("inside someFunc");
}

someFunc();

var otherFunc = function(){
  alert("inside otherFunc");
};

otherFunc();

function someFuncWithArgs(argOne){
    alert("Got argOne in someFuncWithArgs: " + argOne);
}
someFuncWithArgs("ARGUMENT");

function someFuncWithMultipleArgs(argOne, argTwo, argThree){
    alert("got args: " + argOne + " " + argTwo + " " + argThree);
}
someFuncWithMultipleArgs(1, 2, 3);

function funcWithNoDeclaredArgs(){
    alert("got no declared args: " + arguments[0] + " " + arguments[1]);
}
funcWithNoDeclaredArgs('a',  5);

function someFuncWithReturnValue(){
    return "some return value";
}

var return_value = someFuncWithReturnValue();
alert("Got return_value from someFuncWithReturnValue: " + return_value);

/* arrays */

var list = [1, 2, 3, 4];

alert("list[0]: " + list[0]);
alert("list[3]: " + list[3]);
for (var counter=0;counter<list.length;counter++){
    alert("List item " + counter + ": " + list[counter]);
}

/* error handling */

try {
    somethingInvalidHere++;
    alert("created " + answer);
}
catch(error) {
    alert("caught an error!");
}
finally {
    alert("a finally will always run, error or no error");
}

var divisionByZero = 200 / 0;
alert("Division by Zero result: " + (divisionByZero == Infinity));

alert("undefined == null: " + (undefined == null));
alert("undefined === null: " + (undefined === null));
alert("undefined == nan: " + (undefined == NaN));
alert("null == nan: " + (null == NaN));


/* objects */

var myObject = {propertyOne:1, propertyTwo:2};

alert("myObject.propertyOne: " + myObject.propertyOne);
alert("myObject['propertyTwo']: " + myObject['propertyTwo']);

/* DOM */

var content = document.getElementById('content');
alert(content.outerHTML);
alert(content.innerHTML);
var new_text = document.createTextNode("Here is some text added with JavaScript");
var new_div = document.createElement("div");
new_div.appendChild(new_text);
content.appendChild(new_div);

/* Timeouts */

setTimeout(function(){
    //this code will execute in 1 second
    alert("after one second!");
}, 1000);

/* Intervals */

setInterval(function(){
    ///this code will execute every 1 second
    alert("another second has passed");
}, 1000);

var interval_count = 0;
var interval = setInterval(function(){
    ///this code will execute every 1 second
    alert("another second has passed, for interval two");
    interval_count++;
    if (interval_count > 5){
        clearInterval(interval);
    }
}, 1000);