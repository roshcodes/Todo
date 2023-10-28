const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    name:String,
},{versionKey:false})
module.exports = mongoose.model('list',todoSchema);