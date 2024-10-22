
// Console Methods:-

// log Method
console.log("This is Console Log Method")

// Info Method
console.info("This is Console Info Method")

// Debug Method

var userId = "UserOne";
var userId2 = "UserTwo";
var userId3 = "UserThree";

console.log("Console log" + " " + userId)

console.info("Console info" + " " + userId2);

console.debug("Console debug" + " " + userId3);

// Table Method

console.table({ 1: "Naveen", 2: "Jani", 3: "Omesh" })

// Error Method

console.error("SyntaxError")

// Clear Method

// console.clear()  

// Warn Method

var testVariable= 404;
var testObj = {name:"Naveen","city": "Hyderabad" };

console.warn("This is a Warning message!")

// Passing variable
console.log(testVariable)
// Passing Object
console.log(testObj)

// Count Method

for (let i = 0; i < 5; i++) {
    console.count(i);
}

// Group method

console.log("This is the outer level");

console.group();
console.log("Level 2");
console.error("There is an error in level-2 ")

console.group();
console.log("Level 3");
console.warn("More of level 3");

console.groupEnd();
console.log("Back to level 2");

console.groupEnd();
console.log("Back to the outer level");


// 5. Assert method : -

let x = 1;
let y = 2;
console.assert(x + y == 4, "Expression is false")
console.assert(x + y == 3, "Expression is True")
console.assert(document.getElementById("Test"), "No element found with ID 'Test'");

//7. Trace method :-

function TraceMethod(){
    function TestMethod(){
        console.trace("Trace call");
    }
    TestMethod();
}
TraceMethod();

  






