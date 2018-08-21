let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: { type: String },
  model: { type: String },
  year: { type: Number },
  price: { type: Number },
  description: { type: String, default: 'Guess its up to you to guess?' },
  imgUrl: { type: URL }
})

module.exports = mongoose.model('Car', schema)