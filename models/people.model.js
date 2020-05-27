const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('People',personSchema)