function countUpAndDown(n) {
    console.log("Going up!");

    // O(n)
    for (var i = 0; i < n; i++) {
      console.log(i);
    }

    console.log("At the top!\nGoing down...");

    //O(n)
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
}
  
countUpAndDown(1000)