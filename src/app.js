const express = require('express')
const app = express()

//Middleware


//Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})
 

//Staring app
app.listen(3000)