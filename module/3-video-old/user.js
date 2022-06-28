var leng = require('./ru.json');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(leng.Hello + ', ' + who.name);
}

exports.User = User;