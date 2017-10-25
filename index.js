const { MongoClient } = require('mongodb')
const express = require('express')
const seed = require('./seed.js')
const app = express()
const path = require('path')
app.use(express.static('./public'))
app.use(express.static('./images'))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const images = db.collection('images')

  app.get('/images', function(req, res) {
    console.log('Getting stuff...')
    images
      .find({}, { _id: 0 })
      .toArray()
      .then(images => {
        res.send(images)
      })
      .catch(err => console.error(err))
  })

  app.listen(7777, function() {
    console.log('Listening on port 7777.')
  })
})
