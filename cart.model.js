const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coderwing').then(()=>{
    console.log("connect to backend..");
})

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  productId: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('user', userSchema);
