const express = require('express'); //to get access to express library
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require ('./config/keys');

const app = express(); //create appliacation that represent express app

//Test**
// app.get('/', (req, res) => {
//     res.send({bye: 'boo'});
// });
  
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
    })
);

//add first route handler
app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

//add second rout handler
app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;
app.listen(PORT);  