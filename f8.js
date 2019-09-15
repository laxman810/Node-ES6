

//Enhanced Object Literals in ES6

var serviceBase = {port: 1234, url: 'laxman.com'},
    getAccounts = function(){return [1,2,3]}


var accountService = {
    __proto__: serviceBase,
    getAccounts,
    toString() {
     return JSON.stringify((super.valueOf()))
    },
	getUrl() {return "http://" + this.url + ':' + this.port},
    [ 'valueOf_' + getAccounts().join('_') ]: getAccounts()
};

console.log(accountService)   


//OUTPUT

//{ getAccounts: [Function: getAccounts],
//  toString: [Function: toString],
//  getUrl: [Function: getUrl],
//  valueOf_1_2_3: [ 1, 2, 3 ] }