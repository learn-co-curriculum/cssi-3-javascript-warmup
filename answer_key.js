// -- DAY 3 ANSWER KEY: Code Writing --

// 1. Write a function called myName that simply returns your name as a string.
// -- Store that string in a variable called thisIsMyName
// -- Log the value of that variable to the console.

function myName() {
  return "Victoria";
} 

var thisIsMyName = myName();
console.log(thisIsMyName);


// 2. Write a function called greeting that:
// -- Takes 1 argument: the hour of the day (24 hour time)
// -- Logs to the console "Good day" if the hour is less than 18, or "Good evening" otherwise.
// -- For example, greeting(10) should log "Good day", and greeting(20) should log "Good evening".

function greeting(hour) {
  if (hour < 18) {
    console.log("Good day");
  } else {
    console.log("Good evening");
  }
}


// Extra credit solution:
function greeting2(hour) {
  if (typeof hour === 'number' && hour >= 0 && hour < 24) {
    if (hour < 18) {
      console.log("Good day");
    } else {
      console.log("Good evening");
    }
  }
}

// Alternative EC solution (another way to write the same thing as above):
function greeting3(hour) {
  if (typeof hour !== 'number' || hour < 0 || hour >= 24) {
    return;
  }
  var message = "Good ";
  if (hour < 18) {
    message += "day";
  } else {
    message += "evening";
  }
  console.log(message);
}

// 3. Write a function called receipt that:
// -- Takes 1 argument, the subtotal (total cost of the meal, without tax or tip)
// -- Returns the total cost, based on a 9% tax and a 15% tip.
// -- For example, receipt(20) should return 24.8.

function receipt(subtotal) {
  var tax = subtotal * 0.09;
  var tip = subtotal * 0.15;
  var total = subtotal + tax + tip;
  return total;
}

// 4. Modify your receipt function to take an additional argument, tip, to specify the percentage of tip to leave. For example, receipt(20, 10) should return 23.8.

function receipt2(subtotal, percentTip) {
  var tax = subtotal * 0.09;
  var tip = subtotal * (percentTip / 100);
  var total = subtotal + tax + tip;
  return total;
}


// 5. Modify your receipt function to replace the subtotal argument with an array called costsPerItem, which is an array containing the prices for each item ordered in the meal. Compute the subtotal from the costsPerItem array and calculate the total cost with tax and tip. For example, receipt([10, 9, 25], 20) should return 56.76.


function receipt3(costsPerItem, percentTip) {
  var subtotal = 0;
  for (var i = 0; i < costsPerItem.length; i++) {
    subtotal += costsPerItem[i];
  }
  var tax = subtotal * 0.09;
  var tip = subtotal * (percentTip / 100);
  var total = subtotal + tax + tip;
  return total.toFixed(2);
}

// 6. Write a function called splitTheBill that:
// -- Takes 2 arguments, the total cost (i.e. with tax and tip included), and an array of string names (e.g. ["Victoria", "Jessie", "Joseph"])
// -- For each person, logs to the console the amount that they owe in the form of "[name] owes $[money]"
// -- Splits the amount owed per person as evenly as possible among the number of people.
// -- Note that money cannot exceed 2 decimal places (e.g. you cannot have $12.255) and the sum of each part should still add exactly up to the total cost.
// -- For example, splitTheBill(122.27, ["Victoria", "Joseph", "Jessie"]) should print:
//    "Victoria owes $40.76"
//    "Joseph owes $40.76"
//    "Jessie owes $40.75"
function splitTheBill(totalCost, names) {
  var approximateCostPerPerson = totalCost / names.length;
  // Get an even dollar amount.
  approximateCostPerPerson = Math.floor(approximateCostPerPerson * 100) / 100;
  var costsPerPerson = [];
  var costSoFar = approximateCostPerPerson * names.length;
  for (var i = 0; i < names.length; i++) {
    costsPerPerson[i] = approximateCostPerPerson;
  }
  var i = 0;
  while (costSoFar < totalCost) {
    costsPerPerson[i] += 0.01;
    costSoFar += 0.01;
    // Note: This should never exceed (costsPerPerson.length - 1), but adding
    // the mod anyway just for safety.
    i = (i + 1) % costsPerPerson.length;
  }

  for (var i = 0; i < names.length; i++) {
    console.log(names[i] + " owes $" + costsPerPerson[i]);
  }
}
