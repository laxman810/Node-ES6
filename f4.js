var body = {
    'username': 'Laxman',
    'password': 'Tukadiya'
}
var username = body.username;
var password = body.password;

console.log(username);
console.log(password);


// Destructuring Assignment in ES6

var {username, password} = body;

console.log(username);
console.log(password);

// OUTPUT

//Laxman
//Tukadiya
//Laxman
//Tukadiya