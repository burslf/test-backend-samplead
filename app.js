const express = require('express');
const http = require('http')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({'message': 'hello backend'})  
})

http.createServer(app).listen(3333, () => {
    console.log('Listening... !')
})