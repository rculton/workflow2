const _ = require('underscore');
const chalk = require('chalk');
const express = require('express');
const bodyParser = require('bodyParser'); 
const PORT = 3000;

const app = express();



app.listen(PORT, () => {
    console.log('Listening now on ' + PORT)
})

