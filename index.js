const express = require('express'); //to get access to express library
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express(); //create appliacation that represent express app

//Test**
// app.get('/', (req, res) => {
//     res.send({bye: 'boo'});
// });

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);  