//Modules -> Encapsulated Code (minimun info is shared)
//CommonJS, every file is module(default)

const names = require('./moduleNames');
const sayHi = require('./moduleUtils')

sayHi(names.fName)
sayHi(names.sName)