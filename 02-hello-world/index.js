
var koa = require('koa');

var app =  koa();

/**
 * Return "hello world" as a string on every request.
 * Hint: this only requires a single line of code.
 */

app.use(function* () {
   this.response.body = 'hello world';

});

module.exports = app;