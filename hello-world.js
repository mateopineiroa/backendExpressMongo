const express = require('express');         //import of framework

const app = express();      //initialize app

const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))