const arr = ['a', 'b', 'c', 'd']

for (let element of arr) {
    console.log(element);
}

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

arr.forEach(function(element, index) {
    console.log(index + ': ' + element);
})

 const newArr = arr.map(function(element, index) {
     return element.toUpperCase()
 })

 const filterdArr = arr.filter(function(element) {
    return element == 'a' || element == 'c'
 })

 const numsArray = [1, 2, 3, 4, 5]
 const sum = numsArray.reduce(function(acc, element) {
    return acc + element
 }, 0)

 // Reduce analog
 const sum2 = numArray.reduce((acc, el) => acc + el)

 const numsArray2 = [1, 2, 3, 4, 5]
 // numsArray2[numArray2.length] = 6
 numsArray2.push(6)
 // numsArray2 => [1, 2, 3, 4, 5, 6]