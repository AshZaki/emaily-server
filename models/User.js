const mongoose = require('mongoose');
const { Schema } = mongoose;  //const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: string
});

mongoose.model('users', userSchema);