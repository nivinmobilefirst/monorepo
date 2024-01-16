const express = require('express');
const app = express();
const port = 3001;
const project2 = require('project2/utility');

app.get('/', (req, res) => {
    const result = project2.addNumbers(15, 7);
    console.log(result);
    res.send('Hello from Project 1! Result is: ' + result);
});

app.listen(port, () => {
    console.log(`Project 1 listening at http://localhost:${port}`);
});
