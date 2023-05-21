const mongoose = require('mongoose');
 

const Message = new mongoose.Schema({
    pseudo: String,
    content: String,
    like: Number
   
})


module.exports = mongoose.model('message',Message);