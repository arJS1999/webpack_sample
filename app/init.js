import express from 'express';
import routes from './routes/recipe.js';

const app = express();
const port = 4000;
// this only possible in express version 4.16.0 onwards
// it is used to get the parsed data
app.use(express.json());
routes(app);

app.use( (req, res, next)=>{
    res.status(404);

    if (req.accepts('json')) {
      res.send({error: true, message: 'Route Not found' });
      return;
    }
});
app.listen(port, ()=>{
    console.log('app is listening on port 4000');
});

// const express = require('express');
// const app = express();

// // Import the recipe route
// const recipeRoute = require('./routes/recipe');

// // Use the recipe route
// app.use('/api/v1', recipeRoute);

// // Start the server
// app.listen(4000, () => {
//   console.log('Server connected on port 4000');
// });