/*
 The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

 Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with
 the same properties whose values are also equal when compared with a recursive call to deepEqual.

 To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
 you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have
 to take one silly exception into account: by a historical accident, typeof null also produces "object".
 */


'use strict';

function deepEqual( obj1, obj2 ) {
  var countObj1 = 0, countObj2 = 0;

  if( obj1 === obj2 ) return true;
  if( obj1 === null || typeof obj1 !== "object" || obj2 === null || typeof obj2 !== "object" ) return false;
  for( var key in obj1 ) {
    countObj1++;
  }
  for( var prop in obj2 ) {
    countObj2++;
    if(!(prop in obj1) || !deepEqual( obj1[prop], obj2[prop] )) return false;
  }
  return countObj1 === countObj2;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true