/*global console*/

//First Function.

function repeatNtime(string, num) {
  'use strict';
  let i = 0;
  let result = '';
  while(i < num) {
    result += string + " ";
    i++;
  }
  return result;
}
console.log(repeatNtime("hamza", 3));

//Secound Function

function max(...numbers) {
  
  let result = -Infinity;
  for(let number of numbers) {
    if(number > result) {
      result = number;
    }
  }
  return result;
}

console.log(max(234,345,25,664,21));
