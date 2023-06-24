//Modules -> Encapsulated Code (minimun info is shared)
//CommonJS, every file is module(default)

const names = require('./moduleNames');
const sayHi = require('./moduleUtils')
const altSyntax = require('./altSyntax')
console.log(altSyntax);
// sayHi(names.fName)
// sayHi(names.sName)