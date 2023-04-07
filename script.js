// @ts-check

// window.onload = function() {
// console.log('Hello world');
// const h1 = document.querySelector(h1)
// console.log('script 1')
// alert('Hello there');
// }
// let user = 'John'
// let user2
// ...
// user2 = 'Jane'

// const user3 = 'Bob'
// user3 = 'Alice'
// var user4
// user4 = 'Shannon'

// let string = 'Hello world'
// let num = 34.3456656
// let boolean = true // false
// let Null = null
// let Undefined = undefined
// let symbol = Symbol('First symbol')

// if (!(string.length == 10)) {

// if (num > 20) {
//     console.log('The num is more than 20')
// } else if (num > 10) {
//     console.log('The num is more than 10')
// } else {
//     console.log('The num is lss than 10')
// }

// let age = 15
// < 16 boy
// 16 < 21 young man
// 21 < Mr
// let gender = 'Female'

// let prefix // boy| Mr. | girl | Mrs/

// if ((age > 18) && (gender == 'Male')) {
//     prefix = 'Mr.'
// } else  if ((age > 18)  && (gender == 'Female')) {
//     prefix = 'Mrs'
// } else if ((age <= 18) && (gender == 'Male')) {
//     prefix = 'boy'
// } else if ((age <= 18) && (gender == 'Female')) {
//     prefix = 'girl'
//}

// if (age > 18) {
//     if (gender == 'Male') {
//         prefix = 'Mr.'
//     } else {
//         prefix = 'Mrs.'
//     }
// } else {
//     if (gender == 'Male') {
//         prefix = 'boy'
//     } else {
//         prefix = 'girl'
//     }
// }

// prefix = (age > 18)
//     ? (gender == 'Male') ? 'Mr.' : 'Mrs.'
//     : (gender == 'Male') ? 'boy' : 'girl'
// console.log(prefix);

// let price
// let city = 'Moscow'

// switch (city) {
//     case 'Moscow':
//         price = 11
//         break;
//     case 'Berlin':
//         price = 9
//         break;

//     default:
//         price = 15
//         break;
// }
// console.log('Price: $' + price);

// console.log(`Price (${city}): $ ${price}`);

// let counter = 0
// while (counter < 11) {
//     console.log(counter);
//     counter++
// }

// for(let i = 0; i < 11; i++) {
//     console.log(i);
// }


// let numOfPersons = 26 // 1 2 3 ... 26
// let numofChild = 0
// let numofAdult = 0
// let age = 1
// // while (age <= numOfPersons) {
// //     if (age < 18) {
// //         numofChild++
// //     } else {
// //         numofAdult++
// //     }
// //     age++
// // }

// // for + if
// for (let age = 1; age <+ numOfPersons; age++) {
//     if (age < 19) {
//         numofChild++
//     } else {
//         numofAdult++
//     }
// }
// // Cyrcle
// console.log('Num of Child: ' + numofChild);
// console.log('Num of Adult: ' + numofAdult);

// let numOfChild = 0
// let numOfAdult = 0
// let arrayofAge = [13, 12, 7, 28, 45, 63, 2]
// for (let i = 0; i < arrayofAge.length; i++) {
// let age = arrayofAge[i]
// if (age < 18) {
//     numOfChild++
// } else {
//     numOfAdult++
// }
// }

// console.log('Num of Child: ' + numOfChild);
// console.log('Num of Adult: ' + numOfAdult);

// let array = [1, 2, 3, 4, 5]
// array.push(6)
// array.push(7)
// for (let  index = 0; index < array.length; index++) {
//     array[index] = array[index] * 2
// }
// console.log(array);

// let arrayOfAge = []
// Math.floor(Math.random() * 29 +1)
// Add to array 10 random integer numbers
// for (let i = 0; i < 10; i++) {
//     let random = Math.floor(Math.random() * 29 +1)
//     arrayOfAge.push(random)
// }
// console.log(arrayOfAge);
// // Filter by age
// let filteredAdultArr = []
// for (let i = 0; i <arrayOfAge.length; i++) {
//     let age = arrayOfAge[i]
//     if (age > 17) {
//         filteredAdultArr.push(age)
//     }
// }
// console.log(filteredAdultArr);

// DZm- home wirk
let iriginArr = [1, 2, 3, 4, 5]
// for ()

let arr = [1, 2, 3, 4, 5]
// arr.forEach(function (value, index) {
//     // console.log(index + ': ' + value);
//     arr[index] = value * 5
// })
// console.log(arr);
let newArr = arr.map(function (value, index) {
    return value * 5
})
console.log(arr)
console.log(newArr)

console.log(15%2)  

let a = 14
let b = 14
let c = 14
if (a > b && a > c) {
    console.log(a)
} else {
    if (b > a && b > c) {
    console.log(b)
    } else {
        console.log(c) 
    }
 }

//  for (let i = 0; i < 10; i++) {
//     console.log('*' + i)
//  }
//  for (let i = 10; i < 26; i++) {
//     console.log(i + ' ' + i + ".4")
//  }

//  for (let i = 25; i < 36; i++) {
//     console.log(i + ' ' + i + ".5" + ' ' + (i-1) + ".8")
//  }

//  let price = 20.4
//  for (let i = 1; i < 20; i++) {
//     console.log('Цена товара ' + i + ' : ' + i*price)
//  }

// let price = 79
// for (let i = 1; i < 21; i++) {
//     console.log('Цена в рублях ' + i + ' : ' + i*price)
// }

// let num = 7
// for (let i = 1; i < 10; i++) {
//     console.log(i + ' * 7 = ' + (7*i))
// }

//  

let sum = 0
for( let i = 100; i < 501; i++) {
    sum = sum + i
}
console.log('sum = ' + sum) 


