var express = require('express')
var app = express()

try {
    app.get('/', function (req, res) {
        res.send('Hello World!')
    })
    app.listen(3000)
} catch (error) {

}