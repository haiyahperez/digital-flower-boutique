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

function show(flower, flowerId) {
  const flower = flower.find((flower) => flower.id === flowerId);
  return flower.name + " " + flower.id;
}
function destroy(flowers, flowerId) {
  const index = flowers.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    flowers.splice(index, 1);
    inform('Flower successfully removed from collection');
    return flowers;
  } else {
    inform('Flower not found. No action taken');
    return flowers;
  }
}
function update(flower, flowerId, updatedFlower) {
  const index = flower.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    flower[index].id = flowerId;
    flower[index].name = updatedFlower;
    inform('Flower successfully updated');
    return flower;
  } else {
    inform('Flower not found. No action taken');
    return flower;
  }
}

module.exports = {
  create,
  index,
  show,
  destroy, 
  update
};
