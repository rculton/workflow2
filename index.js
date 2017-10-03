const _ = require('underscore');
const chalk = require('chalk');
const express = require('express');
const bodyParser = require('bodyParser'); 
const PORT = 2000;

const app = express();

var movies = ['T2', 'TMNT']

app.get('/', (req,res) => {

})
//get movies/:id shows the movie at that ID
app.get('/movies/:id', (req,res) => {

})
//post movies/:movie_name adds movie_name to movies array
app.post('/movies/:movie', (req,res) =>{

})
//delete movies/:movie_name deletes the movie with that name
app.delete('/movies/:movie', (req, res)=>{

})
//edit movies/:movie_name_old/:movie_name_new changes the movie with the old movie name, to the new movie name
app.patch('/movies/:old_movie/:new_movie', (req, res)=>{

})



app.listen(PORT, () => {
    console.log('Listening now on' + PORT)
})

