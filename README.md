---
tags: arrays, data types, loop
language: JavaScript, JS
---

# JavaScript Day 3 Warm-up!


## Instructions:

### 1. Function Drills

For each of these functions, do the following:

1. Identify the function name, the function's inputs (name/value) (parameters) and the function's outputs (name/value) (things that are returned). 
2. Describe what the function does in plain English.

```javascript
function sayHello() {
  console.log("hello world");
}
```

```javascript
function logTwoNumbers(first, second) {
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

##### What's the difference between `console.log(sum)` and `return sum`?
Try typing the following in your console:

```javascript
var result = logTwoNumbers(1, 2);
result;
```

```javascript
var sum = addTwoNumbers(1, 2);
sum;
```

Note that `result` is undefined, while `sum` is 3. Returning a result allows you to capture the result in a variable. Using `console.log` simply prints out the result on the console, but it can't be saved into a variable.

### 2. Conditional Drills
Given these variables:
```javascript
var bigNum = 1000;
var smallNum = 2;
```

1. Use the equals `===` operator to make a false statement and a true statement, and `console.log` the results

2. Use the less than `<` operator to make one true statement and one false statement, and `console.log` the results

3. Use the greater than `>` operator to make one true statement and one false statement, and `console.log` the results

4. Use the not equals `!=` operator to make one true statement and one false statement, and `console.log` the results

### 3. Code Reading
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

### 4. Code Writing

1.  Write a function called `myName` that simply returns your name as a string. 
  * Store that string in a variable called `thisIsMyName`
  * Log the value of that variable to the console.
2.  Write a function called `greeting` that:
  * Takes 1 argument: the hour of the day (24 hour time)
  * Logs to the console "Good day" if the hour is less than 18, or "Good evening" otherwise.
  * For example, `greeting(10)` should log "Good day", and `greeting(20)` should log "Good evening".
  * Extra credit: Do not print anything when the hour parameter is invalid, such as `greeting(24)`, `greeting("hello")`, or `greeting()`. (Decimals are OK, e.g. `greeting(17.9)` should log "Good day").
3. Write a function called `receipt` that:
  * Takes 1 argument, the subtotal (total cost of the meal, without tax or tip)
  * Returns the total cost, based on a 9% tax and a 15% tip.
  * For example, `receipt(20)` should return 24.8.

### 5. Extra Credit
Complete these if you have extra time and want to take on a challenge!

1. Modify your `receipt` function in the following ways:
  * Take an additional argument, tip, to specify the percentage of tip to leave. For example, `receipt(20, 10)` should return 23.8.
  * Replace the subtotal argument with an array called costsPerItem, which is an array containing the prices for each item ordered in the meal. 
    * Compute the subtotal from the costsPerItem array and calculate the total cost with tax and tip.
    * Round to the nearest cent.
    * For example, `receipt([10, 9, 25], 20)` should return 56.76.
2. Write a function called `splitTheBill` that:
  * Takes 2 arguments, the total cost (i.e. with tax and tip included), and an array of string names (e.g. `["Victoria", "Jessie", "Joseph"]`)
  * For each person, logs to the console the amount that they owe in the form of "[name] owes $[money]"
  * Splits the amount owed per person as evenly as possible among the number of people. 
  * Note that money cannot exceed 2 decimal places (e.g. you cannot have $12.255) and the sum of each part should still add exactly up to the total cost.
  * For example, `splitTheBill(122.27, ["Victoria", "Joseph", "Jessie"])` should print:

    "Victoria owes $40.76"

    "Joseph owes $40.76"

    "Jessie owes $40.75"
