// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log();

/* What is temperature amplitude?
It is the difference between the highest and lowest temp.

- Okay, but how do we compute max and min temperature?
- What's a sensor error?  What do we do when one occurs?

Breaking up into sub-problems...
- How to ignore errors?
- Find max value in temperature array
- Find min value in temp array
- Subtract min from max and return it
- Subtract min from max (amplitude) and return it




const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// Problem 2--function should receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?

// 2) Breaking up into sub-problems
// - Merge 2 arrays -- this one might be the better of the two methods

const measureKevin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    // value: Number(prompt("Degrees celsius: ")),
  };

  // B) FIND
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKevin());

*/

/*

1. Create bare bones definition of a function
2. Allow us to flexibly iterate through input array
3. Track the iterator to the place in the loop so that we can display what the temp will be within x number of days

*/

const printForecast = function (arr) {
  const arrLength = arr.length;
  let forecast = "";
  for (let i = 0; i < arrLength; i++) {
    forecast += `... ${arr[i]} degrees Celsius in ${i + 1} days`;
  }
  return forecast;
};

console.log(printForecast([17, 21, 23]));
