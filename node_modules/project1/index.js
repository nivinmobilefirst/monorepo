const express = require('express');
const app = express();
const port = 3001;
const project2 = require('project2/utility');

app.get('/', (req, res) => {
    const result = project2.addNumbers(5, 7);
    console.log(result); // Output: 12
    res.send('Hello from Project 1! Result: ' + result);
});

app.listen(port, () => {
    console.log(`Project 1 listening at http://localhost:${port}`);
});
