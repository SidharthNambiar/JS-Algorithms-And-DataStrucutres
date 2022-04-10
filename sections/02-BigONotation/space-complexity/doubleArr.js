function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
}
  
console.log(double([1, 2, 3, 4, 5]));


//space complexity: O(n)
/*
As the array length grows, the newArr space grows proportionally, therefore the space complexity is O(n)

*/