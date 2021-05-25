const express = require('express')
const path = require.path('path')

const app = express()

app.use(express.static(__dirname + './Client'))

app.get('/', (req, res) => {
    res.end()
})



app.listen(5500, () => {
    console.log(`server running at port http://localhost:5500`)
})