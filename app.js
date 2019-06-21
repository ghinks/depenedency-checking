const echo = require("./src/index");

const helloWorld = echo("hello world");

console.log(Array(100).join("*"));
console.log(helloWorld);
console.log(Array(100).join("*"));
