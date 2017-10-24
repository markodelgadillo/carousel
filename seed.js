const { MongoClient } = require('mongodb')

const seed = (module.exports = MongoClient.connect('mongodb://localhost/libray', function (err, db) {
  const images = db.collection('images')

  if (err) {
    console.error(err)
    process.exit(1)
  }
  images.deleteMany()
  images.insertMany(
  [
    {
      id: 1,
      image: ''
    },

    {
      id: 2,
      image: ''
    },

    {
      id: 3,
      image: ''
    }
  ]
) db.close
}))
