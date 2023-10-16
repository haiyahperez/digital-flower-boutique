const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");
const flower = require("../data/flowers.json");

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
  return flower;
}
function index(flowers) {
  return flowers.map((flower) => flower.id + " " + flower.name).join("\n");
}

module.exports = {
  create,
  index
//   show,
//   destroy, 
//   update
};
