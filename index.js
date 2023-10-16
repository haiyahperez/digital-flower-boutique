const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { create, index, show, destroy, update} = require("./src/flowerController");

const flowers = readJSONFile("./data", "flowers.json");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const flower = process.argv[3];

  let writeToFile = false;
  let Cart = [];

  switch (action) {
    case "index":
      const flowersView = index(flowers);
      inform(flowersView);
      break;
    case "create":
      updatedCart = create(flowers, flower); //flowers is the array, flower is the flower that is being added.
      writeToFile = true;
      break;
    case "show":
      const flowerView = show(flowers, flower);  
      inform(flowersView);
      break;
    case "update":
      updatedCart = update(flowers, flower, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedCart = destroy(flowers, flower);
      writeToFile = true;
      break;
    default:
      inform("There was an error.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "customerCart.json", updatedCart);
  }
}

run();

