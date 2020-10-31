
var restoreString = function(s, indices) {
        var newString = new Array();

    for(var i = 0; i < indices.length; i++) {

        newString[indices[i]] = s[i];

    }

    return newString.join("");

};

var example1 = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
var example2 = restoreString("abc", [0, 1, 2]);

console.log("Example 1: \"codeleet\", [4 ,5, 6, 7, 0, 2, 1, 3]");
console.log(example1);
console.log("Example 2: \"abc\", [0, 1, 2]");
console.log(example2);
