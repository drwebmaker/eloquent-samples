/*
 Write a program that creates a string that represents an 8?8 grid, using newline characters to separate lines. At each
 position of the grid there is either a space or a “#” character. The characters should form a chess board.

 Passing this string to console.log should show something like this:

 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
*/


'use strict';

var row = 8,
  cell = 8,
  result = '\n';
for (var i = 1; i <= row; i++) {
  for (var j = 1; j <= cell; j++) {
    result += (i % 2 === j % 2) ? "#" : " ";
  }
  result += "\n";
}
console.log(result);