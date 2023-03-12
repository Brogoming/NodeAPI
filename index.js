const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const postRoute = require('./routes/posts')

dotenv.config()

//connect to DB
mongoose.connect(process.env.DBCONNECT)

//import routes
const authRoute = require('./routes/auth')

//middleware
app.use(express.json())

//route middleware
app.use('/api/user', authRoute) //everything in the authRoute will have this prefix
app.use('/api/posts', postRoute)

app.listen(3000, () => console.log('Server is up and running'))