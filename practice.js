// Hello World example
console.log('Hello World')


// global example
// console.log('global.luckyNum');

// global.luckyNum = '23';

// console.log('global.luckyNum');


// process platform example
// console.log(process.platform)


// process user example
console.log(process.env.USER);

// Event example, callback function
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {

    console.log('I like sushi')
})

eventEmitter.emit('lunch')


// read file example BLOCKING
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf-8');

console.log(txt)

// read file example NON - Blocking
readFile('./hello.txt', 'utf-8', (err, txt) => {
    console.log(txt)
})

console.log('do this ASAP')

// read file example PROMISED (cleaner)
// const { readFile } = require(fs).promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf-8')
// }

// module example
const myModule = require('./my-module')

console.log(myModule)

// express module example
const express = require('express');

const app = express();

app.get('/', (request, response) => {

})