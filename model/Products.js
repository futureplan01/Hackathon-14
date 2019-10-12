//Model Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    pid: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        minlength: 1,
        trim: true
    },
    containerType: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    Ingredience: {
        type: Date,
        default: Date.now
    },
    showUsers: {
        type: String
    },
    exp:{
        type: Date,
    }

});

// created a model that takes in 'user'
module.exports = User = mongoose.model('user', UserSchema);