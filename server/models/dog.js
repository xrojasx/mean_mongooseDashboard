var mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
    });
const Dog = mongoose.model('Dog', DogSchema);