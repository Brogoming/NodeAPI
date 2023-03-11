const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

//connect to DB
mongoose.connect(process.env.DBCONNECT)

//import routes
const authRoute = require('./routes/auth')

//middleware
app.use(express.json())

//route middleware
app.use('/api/user', authRoute) //everything in the authRoute will have this prefix


app.listen(3000, () => console.log('Server is up and running'))