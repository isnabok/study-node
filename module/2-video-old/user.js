function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log("Hello, " + who.name);
}

console.log('server.js required');

console.log(global); // {}

global.User = User;

console.log(global); // { User: [Function: User] }