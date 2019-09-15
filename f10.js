//Modules in ES6


//module.js file:

export var port = 3000
export function getAccounts(url) {
}


//main.js file:


import {port, getAccounts} from 'module'
console.log(port) // 3000

//OR import everything as a variable service in main.js:


import * as service from 'module'
console.log(service.port) // 3000