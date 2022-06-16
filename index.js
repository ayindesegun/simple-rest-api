import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import usersRoute from './routes/users.js'
const port = 5000

const app = express()
app.use(bodyParser.json())
app.use('/users', usersRoute)
mongoose.connect('mongodb://localhost:27017/rest')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`The server is up and running on port ${port}`)
})
