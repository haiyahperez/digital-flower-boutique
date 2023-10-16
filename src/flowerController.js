const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");
import chalk from 'chalk'; // ??? what is wrongggggg

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
function update(flowers, flowerId, updatedFlower) {
  const index = flowers.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    flowers[index].id = flowerId;
    flowers[index].name = updatedFlower;
    inform(chalk.green('Flower successfully updated!'));
    return flowers;
  } else {
    inform(chalk.red('Sorry! Flower cannot be found.'));
    return flowers;
  }
}
function destroy(flowers, flowerId) {
  const index = flowers.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    flowers.splice(index, 1);
    inform(chalk.yellow('Flower successfully removed from collection.'));
    return flowers;
  } else {
    inform(chalk.red('Sorry! Flower cannot be found.'));
    return flowers;
  }
}
function addToCart(flowers, flowerId, addCart) {
  const flower = flowers.find((flower) => flower.id === flowerId);
  if (flower) {
    addCart.push(flower) 
  } else {
    inform (chalk.red("Sorry! This flower cannot be found."))
  }
  return addCart
}
function totalCart(cart) {
  let sumCart = cart.reduce((sum, flower) => sum + flower.priceInCents, 0);
  sumCart = sumCart/100
  return `$` + sumCart.toFixed(2) 
}
function deleteFromCart(cart, flowerId) {
  const index = cart.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    cart.splice(index, 1);
    inform(chalk.cyan('Flower successfully removed from cart.'));
    return cart;
  } else {
    inform(chalk.red('Sorry! Flower cannot be found.'));
    return cart;
  }
}


module.exports = {
  create,
  index,
  show,
  update,
  destroy,
  addToCart,
  totalCart,
  deleteFromCart
};
