setTimeout(function(){
  console.log('first block excution!')
}, 1000)


//Promises in ES6


var wait1000 =  new Promise((resolve, reject)=> {
  setTimeout(resolve, 1000)
}).then(()=> {
  console.log('second block excution!')
})


//OUTPUT

// first block excution!
// second block excution!