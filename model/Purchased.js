const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    pid:{
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    purchaseDate:{
        type: Date,

    },
    expDate: {
        type: Date,
    }
})

module.exports = User = mongoose.model('user', UserSchema);