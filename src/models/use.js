const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    comments: {
        type: String,
        required: true
    },
})

//need to create collection
module.exports = mongoose.model('User', userSchema)