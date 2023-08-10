const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const mongoURI = process.env.REACT_APP_DATABASE

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to Mongodb');
    } catch (error) {
        console.log('Not Connected to Mongodb')
    }
}

connectToMongo()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
