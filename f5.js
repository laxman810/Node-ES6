var ids = ['laxman','ram','bharat']
var messages = ids.map(function (value) {
  return "Name is " + value // explicit return
})

console.log(messages);




// Arrow Functions in ES6

var ids = ['laxman','ram','bharat']
var messages = ids.map(value => `Name is ${value}`) // implicit return

console.log(messages);


//OUTPUT
//['Name is laxman' , 'Name is ram' , 'Name is bharat']
//['Name is laxman' , 'Name is ram' , 'Name is bharat']