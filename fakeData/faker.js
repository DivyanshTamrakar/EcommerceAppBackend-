var faker = require('faker');

faker.seed(123);

const arr = [...Array(5)].map((item) => ({
  name: faker.commerce.productName(),
  productModel: faker.random.uuid(),
  productUrl:faker.internet.url(),
  inStock:faker.random.boolean(),
  fastDelivery:faker.random.boolean(),
  productdescription :faker.commerce.productDescription(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  
}));



module.exports = { arr }