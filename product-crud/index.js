const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute);

// start express at the given port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// mongodb(docker) connection
mongoose.connect('mongodb://product-db:27017/myapp')
  .then(() => console.log('Connected!'))
  .catch((e) => console.log('MongoDB not connected ' + e));
