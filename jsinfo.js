/////  jsInfo.info


// /// Translate border-left-width to bortderLeftWidth
// function camelize(str) {
//     str = str.split("-");
//     return str.map((word, i) => i == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
// }

// console.log(camelize("background-color"));


// /// Filter range
// function filterRange(arr, a, b) {
//     let finalArr = arr.filter(item => (item >= a && item <= b))
//     return finalArr;
// }

// console.log(filterRange([5,3,8,1], 1, 4));


// // Filter range "in place"
// let arr = [18, 2, 2, 5, 3, 8, 1];
// function filterRangeInPlace(arr, a, b) {
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i,1);
//             i--
//         }
//     }
//     return arr
// }





// console.log(filterRangeInPlace(arr, 1, 4))


// // Sort in decreasing order
// let anotherArr = [5, 2, 1, -10, 8];

// console.log(anotherArr.sort((a, b) => b - a))



// // Copy and sort arr 
// let copySortArr = ["HTML", "JavaScript", "CSS"]

// function copySorted(arr) { 
//     return arr.slice().sort()
// }

// console.log(copySorted(copySortArr));
// console.log(copySortArr)




// // Create an extendable calculator
// function Calculator() {
//     this.methods = {
//         "-": (a,b) => a-b,
//         "+": (a,b) => a+b
//     };
    
//     this.calculate = function(str) {
//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[3];

//         if(!this.methods[op] || isNan(a) || isNaN(b)) {
//             return NaN
//         }
//         return this.methods[op](a, b);
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     }
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a,b) => a * b);
// powerCalc.addMethod("/", (a,b) => a / b);
// powerCalc.addMethod("**", (a,b) => a ** b);

// console.log(powerCalc);


// // Map to names 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => user.name)

// console.log(names)


// // Map to Objects
// let johnSm = { name: "John", surname: "Smith", id: 1 };
// let peteHu = { name: "Pete", surname: "Hunt", id: 2 };
// let maryKey = { name: "Mary", surname: "Key", id: 3 };

// let usersAgain = [ johnSm, peteHu, maryKey ];

// let usersMapped = usersAgain.map(user => ({
//     fullNam: `${user.name} ${user.surname}`,
//     id: user.id
// }))

// console.log(usersMapped)

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */


// //// sort users by Age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let nameArr = [ pete, john, mary ];

// function sortByAge(arr) {
//     arr.sort((a,b) => a.age - b.age)
//     return arr;
// }

// console.log(sortByAge(nameArr));




// //// Shuffle an Array
// let numArr = [1, 2, 3];

// function shuffle(arr) {
//     for(let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i+1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return (arr);
// }

// console.log(shuffle(numArr));



/// Get Average Age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr));