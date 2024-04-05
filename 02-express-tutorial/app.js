const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express();

app.use([logger,  authorize])    

app.get('/', (req, res) => {
    console.log(req.user  )
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('products')
})

app.get('/api/items', (req, res) => {
    res.send('items')
})

app.listen(1000, () => {
    console.log('Server is listening to  the port 1000')
})