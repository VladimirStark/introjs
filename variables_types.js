let varName
// Primitive types
varName =  'Value' // value type = string
varName = 12  // value type = number
varName = true //  value type = boolean
varName = null  //value type null
varName = undefined  // value type = undefined

// Structure types
varName = {
    // key: value,
    masage: 'Hello',
    status: 200
}  // value type = object
console.log(varName.message);
let user = {
    name: 'Jo',
    emaile: 'test@mail.ru',
    age: 33
} // Object
varName == [1, 2, 3, 4, 5] // value type = Array
console.log(varName [2])

//Variables
let username
username = 'Jo'
let email = 'test@mail.ru'
// Old standart
var oldVar = 'Yello world'

// Const
const options = {
    port: 3000,
    host: 'http: //localhost',
    login : 'name',
    password: 'superpass'
}
// wrong !!!!
options = 'new value'

// Variables visibiliry:
let age = 8
let message = 'No age' // Global var
if (age > 17) {
    let message = 'Adult' // Scoped var
    console.log(age);
    console.log(message);
} else {
    let message = 'Child' // Global var
    console.log(age);
    console.log(message);
}
console.log(message);