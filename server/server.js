/****************************************************************************************
* @description    : forgotPassword application
* @overview       : forgotPassword application where the API are created
* @author         : Naresh Patil<nareshpatil.nrp@gmail.com>
* @version        : 1.0
* @since          : 13-02-2020
******************************************************************************/
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/user.routes')
const expressValidator = require('express-validator')
const dbconfig = require('./config/database.config')
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator());
app.use('/', routes);

//connecting to the database
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to the database");//successfully connects to the database
    })
    .catch(() => {
        console.log('Could not connect to the database');
        process.exit();
    })

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Chat-App application."});
});
app.listen(3000, () => {
    console.log("Server is listening on port : 3000")
});