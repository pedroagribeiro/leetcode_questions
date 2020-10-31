
var smaller_in_array = function(nums, n) {

    var smaller = 0;

    for(var i = 0; i < nums.length; i++) {

        if(nums[i] < n) smaller++;

    }

    return smaller;

}

var smallerNumbersThanCurrent = function(nums) {
        var howManySmaller = new Array();

    for(var i = 0; i < nums.length; i++) {

        howManySmaller[i] = smaller_in_array(nums, nums[i]);

    }

    return howManySmaller;

};

var example1 = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
var example2 = smallerNumbersThanCurrent([6, 5, 4, 8]);

console.log("Example 1: [8, 1, 2, 2, 3]");
console.log(example1);
console.log("Example 2: [6, 5, 4 ,8]");
console.log(example2);
