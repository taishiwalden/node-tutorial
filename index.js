// express module example
const express = require('express');

const app = express();

// const { readFile } = require("fs").

// app.get('/', (request, response) => {

//     readFile('./home.html', 'utf8', (err, html) => {

//         if (err) {
//             response.status(500).send('sorry, out of order')
//         }

//         response.send(html);
//     })
// })

// .promises 
const { readFile } = require("fs").promises;

app.get('/', async(request, response) => {

    response.send(await readFile('./home.html', 'utf8'));

})

// define port
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))