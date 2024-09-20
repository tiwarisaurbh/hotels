const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ['sweet', 'spicy', 'sour'],
    required: true
  },
  is_drink: {
    type: Boolean,
    default: false
  },
  ingredients: {
    type: [String],
    default: []
  },
  num_sales: {
    type: Number,
    default: 8
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;



//git command
// git init
//git status
//git add server.js
//git add .*

//git ignore to avoid node module(gitignore)

// git commit -m "version first"

// hosting mongodb


