'use strict'

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/build'))

app.listen(4000, function () {
  console.log('App listening on port 4000!')
})

