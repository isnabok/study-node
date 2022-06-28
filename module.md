## Require()
Require — одна из немногих синхронных операций ввода/вывода в Node. Следует избегать require в частях приложения выполняющих интенсивный ввод/вывод. Это блокирущая операция.

Первое отличие модулей JavaScript в NodeJs от браузерного JS - это глобальное определение переменных. В браузерном JS если глобальная переменная определена в одном скрипте, то она доступна и в скрипте, который подключен ниже.

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
### Виды модулей
Есть 3 типа модулей, это js, node, json
- js - обычный js файл
- node(.node) - делается путем компиляции файла на языке C++
- json - формат json-файла, хранит дафнные в простейшем виде в виде файла

Пример
```json
{
    "Hello": "Привет"
}
```
В качестве модуля может выступать также директория. При подкоючении будет искаться файл index.js

Еще пример, простой конвертер канадского доллара в доллар US

```javascript
// file currency.js

const canadianDollar = 0.91; // курс канадского доллара

// простая функция округления до 2-х знаков
function roundTwo(amount) {
    return Math.round(amount * 100) / 100;
}
// exports
exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar);
exports.USToCanadian = us => roundTwo(us / canadianDollar);
```
В данном примере будут доступны для приложения включающего этот модуль только canadianToUS и USToCanadian. Переменная canadianDollar закрыта от внешнего доступа.

```javascript
// file test-currency.js
const currency = require('./currency');

console.log(`50 Canadian dollars equals this amount of US dollars: ${currency.canadianToUS(50)}`); //45.5
console.log(`30 US dollars equals this amount of Canadian dollars: ${currency.USToCanadian(30)}`); // 32.97
```
Заполнение объекта exports модуля предоставляет простой механизм распределения повторно используемого кода по разным файлам



