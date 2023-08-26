const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const User = mongoose.model('User', { // collection name: users
  firstName: String,
  lastName: String,
  email: String,
  phonNumber: Number
})

const Book = mongoose.model('Book', { // collection name: books
  firstName: String,
  lastName: String,
  email: String,
  phonNumber: Number
})

const Child = mongoose.model('Child', { // collection name: books
  firstName: String,
  lastName: String,
  email: String,
  phonNumber: Number
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.json({ message: 'All good!' })
})

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Server runniung on http://localhost1:${process.env.PORT}`))	
    .catch((error) => console.error(error))
})










/*
  -------------------------------------------
    MERN: 
    - M: MongoDB
    - E: Express
    - R: React.js
    - N: Node.js

    DB: Database (Permanent Storage)
    - Relational (SQL) 
        - Tables & Rows
        - This is used when the structure/schema is defined
        - Eg: MySQL, PostgreSQL, etc
    - Non-Relational (No-SQL) 
        - Collections & Documents
        - This is used when the structure/schema is unclear
        - Eg: MongoDB, AWS DynamoDB

    Driver:
    - Mongoose: ODM (Object Data Modeling) for MongoDB

    Example for a Mongoose Schema:
    - User
      - firstName: String
      - lastName: String
      - email: String
      - phoneNumber: Number
*/