const express = require('express'); //to get access to express library
const mongoose = require('mongoose');
const keys =require('./config/keys');
require('./models/User')
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true});

const app = express(); //create appliacation that represent express app

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);  