
var kidsWithCandies = function(candies, extraCandies) {

    var kidsWithExtraCandies = new Array();
    var greatest = candies[0];

    for(var i = 1; i < candies.length; i++) {

        if(candies[i] > greatest) greatest = candies[i];

    }

    for(var i = 0; i < candies.length; i++) {

        if(candies[i] + extraCandies >= greatest) kidsWithExtraCandies[i] = true;
        else kidsWithExtraCandies[i] = false;

    }

    return kidsWithExtraCandies;

}

var example1 = kidsWithCandies([2, 3, 5, 1, 3], 3);
var example2 = kidsWithCandies([4, 2, 1, 1, 2], 1);

console.log("Example 1: [2, 3, 5, 1, 3], 3");
console.log(example1);
console.log("Example 2: [4, 2, 1, 1, 2], 1");
console.log(example2);
