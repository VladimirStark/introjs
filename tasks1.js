// const numArray = [1, 2, 3, 4, 5]
// mult * 1*2 * 2*2 * 3*2 * 4*2 * 5*2
// numArray[i]
// acc
// let mult = 1
// // Loop
// for (let i = 0; i < numArray.length; i++) {
//     mult = numArray[i] * 2 * mult 
// }
// console.log(mult)

// while
// let index = 0
// let mult = 1
// while (index < numArray.length) {
//     mult = numArray[index] * 2 * mult
//     index++
// }
// console.log(mult);

// For in loop
// let index = 0
// let mult = 1
// for (let index in numArray) {
//     mult = numArray[index] * 2 * mult
// }
// console.log(mult);

// For of loop
// let mult = 1
// for (let el of numArray) {
//     mult = el * 2 * mult
// }
// console.log(mult);

// Foreach metod
// arr.forEach
// let mult = 1
// numArray.forEach(function(element, index) {
//     mult = element * 2 * mult
//     console.log(mult)
// })

const people = [5, 15, 24, 12, 70, 54, 18]
const adults = [] 
const children = []
// let childrenIndex = 0
// let adultsIndex = 0
// for (let index = 0; index < people.length; index++) {
//     if (people[index] > 17) {
//         adults[adultsIndex] = people[index]
//         adultsIndex++
//     } else {
//         children[childrenIndex] = people[index]
//         childrenIndex++
//     }
// }
// console.log('Adults');
// console.log(adults);
// console.log('Children');
// console.log(children);
for (let element of people) {
    if (element > 17) {adults.push(element)} 
    else {children.push(element)}
}
console.log('Adults');
console.log(adults);
console.log('Children');
console.log(children);