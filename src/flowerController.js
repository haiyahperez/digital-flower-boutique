const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");
// const flowers = require("../data/flowers.json");

const inform = console.log


function create(flowers, flowerName) {
  const flower = {
    name: flowerName,
    id: nanoid(5),
    color: faker.color.human(),
    priceInCents: faker.number.int({ max: 6500, min: 1500}),
    inStock: faker.number.int({max: 135, min : 0})
  }
  flowers.push(flower)
  return flowers;
}
function index(flowers) {
  return flowers.map((flower) => flower.id + " " + flower.name).join("\n");
}
function show(flowers, flowerId) {
  const flower = flowers.find((flower) => flower.id === flowerId);
  return flower.name + " " + flower.id;
}
function addToCart(flowers, flowerId, addCart) {
  const flower = flowers.find((flower) => flower.id === flowerId);
  if (flower) {
  addCart.push(flower) 
  } else {
    inform ("Sorry! This flower cannot be found.")
  }
  return addCart
}

// function totalCart(cart) {
//   let sum = 
//
// function deleteFromCart
// make function that takes from the flower arr (show .find() but you have to push the flower INTO the cart. Create third arg for the cart. )
module.exports = {
  create,
  index,
  show,
  addToCart,
//   destroy, 
//   update
};
