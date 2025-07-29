const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coderwing');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('product', productSchema);
