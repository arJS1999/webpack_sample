import recipeController from "../controllers/recipe.js";

export default (app)=>{
    // recipe endpoints
    app.get("/api/v1/", (req, res)=> res.status(200).json({"Recipe API": "Healthy"}))
    app.get("/api/v1/recipe", recipeController.getRecipes);
    app.post("/api/v1/recipe", recipeController.addRecipe);   
}

// const express = require('express');
// const router = express.Router();

// // Define the GET /api/v1/recipe route
// router.get('/recipe', (req, res) => {
//   // Handle the request and send a response
//   res.send('Hello, Recipe API!');
// });

// module.exports = router;