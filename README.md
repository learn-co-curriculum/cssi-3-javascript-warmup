---
tags: arrays, data types, loop
language: JavaScript, JS
---

# JavaScript Day 3 Warm-up!


##Instructions:

###1. Function Drills

For each of these functions, do the following:

1. Identify the function name, the function's inputs (name/value) (parameters) and the function's outputs (name/value) (things that are returned). 
2. Describe what the function does in plain English.

```javascript
function sayHello() {
  console.log("hello world");
}
```

```javascript
function addTwoNumbers(first, second) {
  var sum = first + second;
  console.log(sum);
}
```

```javascript
function addTwoNumbers(first, second) {
  var sum = first + second;
  return sum;
}
```

###2. Conditional Drills
Given these variables:
```javascript
var bigNum = 1000;
var smallNum = 2;
```

1. Use the equals `===` operator to make a false statement and a true statement, and `console.log` the results

2. Use the less than `<` operator to make one true statement and one false statement, and `console.log` the results

3. Use the greater than `>` operator to make one true statement and one false statement, and `console.log` the results

4. Use the not equals `!=` operator to make one true statement and one false statement, and `console.log` the results

###3. Code Reading
*DO NOT RUN THESE CODE EXAMPLES!!*

The following is an exercise in reading code. Try to answer the following questions by only reading the code, without actually running it!

1. What is the output of the following code?

```javascript
for (var i = 1; i <= 4; i++) {
  console.log("*");
}
```

```javascript
var x = "|";
for (var i = 1; i <= 4; i++) {
  x = x + "*";
}
x = x + "|";
console.log(x);
```

```javascript
for (var j = 1; j <= 3; j++) {
  var x = "|";
  for (var i = 1; i <= 4; i++) {
    x = x + "*";
  }
  x = x + "|";
  console.log(x);
}
```

2. What is the output of the following code?

```javascript
function touch(elbow, ear) {
  console.log("touch your " + ear + " to your " + elbow);
}

var head = "shoulders";
var knees = "toes";
var elbow = "head";
var eye = "eyes and ears";
var ear = "eye";
      
touch(ear, elbow);
touch(eye, ear);
touch(head, "knees " + knees);

```

###4. Code Writing

1.  Write a function called `myName` that simply returns your name as a string. Store that string in a variable called `thisIsMyName`, and log the value of that variable to the console.
2.  Write a function called `greeting` that:
* Takes 1 argument: the hour of the day (24 hour time)
* Logs to the console "Good day" if the hour is less than 18, or "Good evening" otherwise.
* For example, `greeting(10)` should log "Good day", and `greeting(20)` should log "Good evening".
3. Write a function called `receipt` that:
* Takes 1 argument, the subtotal (total cost of the meal, without tax or tip)
* Returns the total cost, based on a 9% tax and a 15% tip.
* For example, `receipt(20)` should return 24.8.
4. Extra credit: Modify the `receipt` function in the following ways:
* Take an additional argument, tip, to specify the percentage of tip to leave. For example, `receipt(20, 25)` should return 
