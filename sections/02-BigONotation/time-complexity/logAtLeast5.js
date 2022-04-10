function logAtleast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++){
        console.log(i);
    }
}

logAtleast5(2);

// as n continues to grow, the runtime
// grows in proportion to n
//O(n)