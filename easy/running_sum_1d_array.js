
var runningSum = function(nums) {

    var runningSum = new Array();

    runningSum[0] = nums[0];

    for(var i = 1; i < nums.length; i++) {
        runningSum[i] = runningSum[i - 1] + nums[i];
    }

    return runningSum;

}

var example1 = runningSum([1, 2, 3, 4]);
var example2 = runningSum([1, 1, 1, 1, 1]);

console.log("Example 1: [1, 2, 3, 4]");
console.log(example1);
console.log("Example 2: [1, 1, 1, 1, 1]");
console.log(example2);
