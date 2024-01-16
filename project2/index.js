const express = require('express');
const app = express();
const port = 3000;
const shared = require('shared/utility');


app.get('/', (req, res) => {
    const result = shared.addNumbers(255, 10);
    console.log(result); 
    res.send('Hello from shared Project !! Result: ' + result);
});

app.listen(port, () => {
    console.log(`Project 2 listening at http://localhost:${port}`);
});
