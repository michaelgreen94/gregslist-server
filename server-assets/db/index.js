let mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds036069.mlab.com:36069/gregslist'
let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("DATABASE ERROR ", err)
})

connection.once('open', () => {
  console.log("CONNECTED TO DATABASE ")
})