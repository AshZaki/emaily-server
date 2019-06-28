const express = require('express'); //to get access to express library
const app = express(); //create appliacation that represent express app

app.get('/', (req, res) => {
    res.send({bye: 'boo'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);