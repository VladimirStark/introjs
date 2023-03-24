// @ts-check
// window.onload = function() {
// console.log('Hello world');
// const h1 = document.querySelector(h1)
// console.log('script 1')
// alert('Hello there');
// }
let user ='John'
let user2
// ...
user2 = 'Jane'

const user3 = 'Bob'
// user3 = 'Alice'
var user4
user4 = 'Shannon'

let string = 'Hello world'
let num = 34.3456656
let boolean = true // false
let Null = null
let Undefined = undefined
let symbol = Symbol('First symbol')

// if (!(string.length == 10)) {
if (num > 20 ) {
    console.log('The num is more than 20')
} else if (num > 10) {
    console.log('The num is more than 10')
} else {
    console.log('The num is lss than 10')
}

let age = 25
let gender =  'Male'

let prefix // boy| Mr. | girl | Mrs/

// if ((age > 18) && (gender == 'Male')) {
//     prefix = 'Mr.'
// } else  if ((age > 18)  && (gender == 'Female')) {
//     prefix = 'Mrs'
// } else if ((age <= 18) && (gender == 'Male')) {
//     prefix = 'boy'
// } else if ((age <= 18) && (gender == 'Female')) {
//     prefix = 'girl'
//}

if (age > 18) {
    if (gender == 'Male') {
        prefix = 'Mr.'
    } else {
        prefix = 'Mrs.'
    }
} else {
    if (gender == 'Male') {
        prefix = 'boy'
    } else {
        prefix = 'girl'
    }
}
console.log(prefix);

