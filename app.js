const express = require('express')
const app = express()

const parser = require('body-parser')
app.use(parser.json())

const port = 3000

const listener = () => console.log(`Server party on port ${port}!`)
app.listen(port, listener)

app.get('/ping', (req, res) => {
  const message = 'Pong!'
  console.log(`ON THE SERVER: ${message}`)
  res.setHeader('content-type', 'text/html')
  res.send(`<h1>${message}</h1>`)
})

app.post('/my-post-route', (req, res) => {
  res.send(`You hit /my-post-route with the following message: ${req.body.message}`)
})