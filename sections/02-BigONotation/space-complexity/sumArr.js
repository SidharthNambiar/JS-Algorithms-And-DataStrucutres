function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
}
  
console.log(sum([1, 2, 3, 4, 5]));

//space complexity: O(1)
// The space take up here is by the total and i variable.
// Both of which are not affected by the size of array,
// therefore the space complexity here is constant