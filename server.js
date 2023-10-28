const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("server is started successfully", port);
})

const db = require('./mongo/db');
const api = require('./routes/api');
app.use('/api', api);

const path = require('path');
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.urlencoded({extended:false}));