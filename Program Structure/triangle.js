/*
 Write a loop that makes seven calls to console.log to output the following triangle:

 #
 ##
 ###
 ####
 #####
 ######
 #######
*/


  'use strict';


  var str = "";
  while (str.length < 7) {

    console.log(str += "#");

  }