function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(2);

// as n grows, at most the loop runs 5 times
// O(1)
