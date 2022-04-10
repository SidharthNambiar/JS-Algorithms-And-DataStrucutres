
// O(n)
function addUpToV1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

// O(1)
function addUpToV2(n) {
    return n * (n + 1) / 2;
}

// console.log("solution 1:", addUpToV1(6));
// console.log("solution 2:", addUpToV2(6));

console.log("Solution 1:")
let t1 = performance.now();
addUpToV1(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

console.log("Solution 2:")
t1 = performance.now();
addUpToV2(1000000000);
t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`)