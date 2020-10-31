
var shuffle = function(nums, n) {

   var result = new Array();

    for(var i = 0; i < n; i++) {

        result[i * 2] = nums[i];
        result[1 + i * 2] = nums[n + i];

    }

    return result;

};

var example1 = shuffle([2, 5, 1, 3, 4, 7], 3);
var example2 = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);

console.log("Example 1: [2, 5, 1, 3, 4, 7], 3 ");
console.log(example1);
console.log("Example 2: [1, 2, 3, 4, 4, 3, 2, 1], 4");
console.log(example2);
