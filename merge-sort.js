// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // Recursively sort the left half
  const leftSorted = mergeSort(left);
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // Merge the halves together and return
  // console.log(merge(leftSorted, rightSorted))
  return merge(leftSorted, rightSorted);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const result = [];
  // Point to the first value of each array
  let i = 0;
  let j = 0;
  // While there are still values in each array...
  while (i < arrA.length && j < arrB.length){
    // Compare the first values of each array
    if (arrA[i] < arrB[j]){
    // Add the smaller value to the return array
    result.push(arrA[i]);
    i++;
    } else {
      result.push(arrB[j]);
      j++;
    }
    // Move the pointer to the next value in that array
  }
  // Return the return array
  if (i < arrA.length) {
    // arrB was fully exhausted and remaining elements from A must move to the end of result array
    return result.concat(arrA.slice(i))
  } else {
    // arrA was fully exhausted and remaining elements from B must move to the end of the result array 
    return result.concat(arrB.slice(j))
  }
}

module.exports = [merge, mergeSort];


// [1,2]
// [4,5,6]
