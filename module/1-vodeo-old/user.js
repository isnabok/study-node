function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log("Hello, " + who.name);
}

var vasya = new User('Вася');
var petya = new User('Петя');

vasya.hello(petya); // Hello, Петя
petya.hello(vasya); // Hello, Вася
console.log(User.prototype); // { hello: [Function (anonymous)] }