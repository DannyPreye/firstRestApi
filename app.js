const mongoose = require('mongoose')
const express = require('express')
const bodyparser = require('body-parser')
const app = express();
require('dotenv/config')
const postRoutes = require('./routes/post')
const cors = require('cors')


// Middleware
app.use(bodyparser.json())
app.use('/posts', postRoutes)

// Cors 
app.use(cors())



app.get('/', (req, res) => {

})


// Connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to mongodb')
})



app.listen(3000)