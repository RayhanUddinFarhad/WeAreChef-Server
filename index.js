const express = require('express')
const app = express()
const port = 5000
const chefs = require ('./chefList.json')

const cors = require('cors')

app.use (cors())

app.get('/', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})