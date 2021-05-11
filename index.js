const express = require('express');
const app = express();
const PORT = 3000;
var cors = require('cors');
var { initializeConnection } = require('./connection/connectionDB')
var productApi = require('./apiproduct.js');
var userApi = require('./apiuser.js');
var cartApi = require('./apicart.js');
var wishlistApi = require('./apiwishlist.js');
var addressApi = require('./apiaddress.js');

app.use(cors());




initializeConnection();// connect with mongodb via mongooose


app.use('/products',productApi);// product from DB
app.use('/users',userApi);// user from DB
app.use('/carts',cartApi);
app.use('/wishlists',wishlistApi);
app.use('/address',addressApi);


app.get('/',(req,res)=>{
  
  res.json({hello:"world"})})



app.listen(PORT, () => {
  console.log('server started');
});







