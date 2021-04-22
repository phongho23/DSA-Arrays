'use strict';

console.log("URLify a string problem");

function urlify(string) {
    string = string.trim();
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newString += '%20';
        } else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));

//filtering an array problem

function filtering(arr, filter = 5) {
    let value = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= filter) {
            value.push(arr[i]);
        }
    }
    return value;
}

console.log(filtering([5, 4, 9, 21, 6, 1, 34, 33, 1, 1, 3, 3, 2]));

// max sum in the array

function maxSum(arr){

    let maxSum = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
      sum = 0;  
      sum = arr[i];

      for(let j = i + 1; j < arr.length; j++){
        sum += arr[j];

        if(sum > maxSum){
          maxSum = sum;
        }

      }

    }
    return maxSum;
  }

let result = maxSum([4,6,-3,5,-2,1])
console.log(result);

//remove characters

function removeChar(string, chars) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let allowed = true;
        for (let j = 0; j < chars.length; j++) {
            if (string[i] === chars[j]) {
                allowed = false;
            }
        }
        if (allowed) {
            result += string[i];
        }
    }
    return result;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
//Bttl f th Vwls: Hw vs. Grzny

//products problem

function products(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                product *= arr[j];
            }
        }
        result.push(product);
    }
    return result;
}

console.log(products([1, 3, 9, 4]));
//[ 108, 36, 12, 27 ]


//2d array





//string rotation
















