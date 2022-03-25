const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
 
//console.table(movies)

// movies.forEach(movie => console.log(movie))

// for (let movie of movies) {
//     console.log(movie)
// }


// movies.unshift('Ghostbusters')
// console.table(movies)


// MUSKETEERS
let musketeers = ['Athos', 'Porthos', 'Aramis']

musketeers.forEach(musk => console.log(musk));

musketeers.push("D'Artagnan");
musketeers.forEach((musk, i) => console.log(i + '-' + musk))

musketeers.splice(2, 1)
console.table(musketeers)



// SUM OF VALUES
const values = [3,11,7,2,9,10];

let sum = 0;
values.forEach(num => sum += num)
console.log(sum)


console.log(Math.max(...values));

console.log(prompt("Enter name: "));