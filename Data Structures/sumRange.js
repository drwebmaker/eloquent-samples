/*
 Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from
 start up to (and including) end.

 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program
 and see whether it does indeed return 55.

 As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used
 to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
 The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
 range(5, 2, -1) produces [5, 4, 3, 2].
 */

'use strict';

function range(start, end, n) {
  var arr = [];
  if (n === undefined) {
    while (end >= start) {
      arr.push(start);
      start++;
    }
  } else {
    if (n > 0) {
      while (end >= start) {
        arr.push(start);
        start += n;
      }
    } else {
      while (start >= end) {
        arr.push(start);
        start += n;
      }
    }
  }
  return arr;
}

function sum(arr) {
  var result = 0;
  for (var i = 0; i< arr.length; i++) {
    result += arr[i];
  }
  return result;
}

  console.log(range(5, 2, -1));
  console.log(range(2, 5));