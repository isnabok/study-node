## Require()

В Node.js каждый модуль (проще говоря, каждый файл), может определить переменные и функции и эти функции или переменные могут быть глобальными для этого файла и они не становятся доступны при подключении к другому файлу через require.

Для этого используется система модулей. *В каждом файле есть объект exports и то что туда будет положено, то и будет доступно при подключении через require*

```javascript
function User(name) {
    this.name = name;
}
User.prototype.hello = function(who) {
    console.log("Hello, " + who.name);
}
console.log('server.js required');
console.log(exports); // {}
exports.User = User;
console.log(exports); // { User: [Function: User] }
```
В Node.js можно сделать глобальные переменные, но на практике это не используется. Для этого нужно записать в объект global. Пример,
```javascript
function User(name) {
    this.name = name;
}
User.prototype.hello = function(who) {
    console.log("Hello, " + who.name);
}
console.log('server.js required');

global.User = User; // будет стразу доступен при подключении require
```