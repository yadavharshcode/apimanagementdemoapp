
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mount routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({
    succes:true,
    responseCode:200,
    message:"Node application is up and running"
  });
});

const port = process.env.PORT || 8080; // Use Azure's PORT environment variable
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
