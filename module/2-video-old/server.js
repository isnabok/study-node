var user = require('./user');

var vasya = new User('Вася');
var petya = new User('Петя');

vasya.hello(petya); // Hello, Петя
petya.hello(vasya); // Hello, Вася

