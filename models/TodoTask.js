const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
content: { // string that hold task details 
    type: String,
    required: true
    },
date: {
    type: Date,
    default: Date.now
    }
})
module.exports = mongoose.model('TodoTask', todoTaskSchema); //This creates and exports a TodoTask model that can be used to create, read, update, or delete tasks in the MongoDB database.