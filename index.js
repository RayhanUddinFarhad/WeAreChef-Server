const express = require('express')
const app = express()
const port = 5000
const chefs = require ('./chefList.json')
const recipes = require ('./chefRecipes.json')

const cors = require('cors')

app.use (cors())




app.get('/', (req, res) => {
  res.send(chefs)
})



app.get ('/recipes', (req, res) => {


  res.send (recipes)
 })

app.get ('/:id', (req, res) => { 

  const id = req.params.id;

  const recipe = recipes.find ( c => c.id == id)

  res.send (recipe)



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})