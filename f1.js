var link = function (fname, lname, age) {
    var fname = fname || 'N/A'
    var lname = lname || 'N/A'
    var age = age || 'N/A'
    console.log(fname);
    console.log(lname);
    console.log(age);
}

link('Laxman', 'Tukadiya');


//Default Parameters in ES6


var link = function (fname = 'N/A', lname = 'N/A', age = 'N/A') {
    console.log(fname);
    console.log(lname);
    console.log(age);
}

link('Laxman', 'Tukadiya');

//OUTPUT
//Laxman
//Tukadiya
//N/A
//Laxman
//Tukadiya
//N/A
