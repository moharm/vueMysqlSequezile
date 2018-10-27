const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
console.log('hellscsco')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.get('/status', (req, res) => {
    res.send({
        message: `hello ${req.body.email} ! Your user was regitered! Have fun!`
    })
})

app.listen(process.env.PORT || 8081)