const express = require('express')
const path = require("path")
const app = express()

//Declare dir paths
const publicDirPath = path.join(__dirname, "../public")

//Middleware
app.use(express.static(publicDirPath))

//Routes
app.get('/', (req, res) => {
  
})
 


//Staring app
console.log("App running on port 3000")
app.listen(3000)