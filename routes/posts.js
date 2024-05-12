// routes/posts.js

const express = require('express');
const router = express.Router();
const Product = require('../postModel'); // Change the import to your product model

// Route to retrieve all products from the database
router.get('/', (req, res) => {
  // Find all products in the database
  Product.find()
    .then(products => {
      if (products.length === 0) {
        return res.status(404).send('No products found');
      }
      res.render('products', { products }); // Render the 'products' template with the products data
    })
    .catch(error => {
      console.error('Error retrieving products:', error);
      res.status(500).send('Error retrieving products');
    });
});

module.exports = router;
