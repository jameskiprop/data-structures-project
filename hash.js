// const priceList = [
//   ["apples", 5],
//   ["oranges", 3],
//   ["grapes", 8], //linear complexity O(n)
//   ["melon", 19],
//   ["kiwi", 23],
// ];

//initializing the costList as a map
const costList = new Map();

//setting the values in the map
costList.set("apple", 5);
costList.set("orange", 7);
costList.set("mango", "4USD");

//getting the values from the map
console.log(costList.get("mango")); // outputs 4USD
console.log(costList.get("apple")); // outputs 5
console.log(costList.get("mango")); // outputs 4USD

//Getting the size of the map
console.log(costList.size); // outputs 3

//deleting an item from the map
// Delete an item from the Map
costList.delete("mango");

console.log(costList.size); // outputs 2

//insertion sort
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); //output olleh

//factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

//find longest word
function findLongestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}
