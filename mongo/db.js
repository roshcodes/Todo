const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/todo')
    .then(()=>{console.log("Connected to database")})
    .catch((e)=>{console.log("error found!",e)})