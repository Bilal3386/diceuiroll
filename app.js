let arr = [-2, -6, -4, -58, -7]
let max = Number.NEGATIVE_INFINITY;
for(let i=0; i<arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(max)

// function learnVariables() {
//      var name = "Bilal";
//     if (typeof name === "string") {
//         var name = "umar";
//     }
//     console.log(name);
// }

// learnVariables()