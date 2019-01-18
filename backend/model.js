var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/task_mongoose');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: null},
    completed: {type: Boolean, default: false}

}, {timestamps: true})
module.exports = mongoose.model('Task', TaskSchema)