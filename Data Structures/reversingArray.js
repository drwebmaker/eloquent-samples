/*
Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise,
write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a
new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
 */

'use strict';

function reverseArray(arr) {
  var arr2 = [];
  for(var i = arr.length-1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}

function reverseArrayInPlace(arr) {
  for( var i = 0; i < Math.floor( arr.length/2 ); i++ ) {
    var tempArr = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempArr;
  }
}


  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  console.log(reverseArray(["A", "B", "C"]));