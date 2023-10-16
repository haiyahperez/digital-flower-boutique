const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { create, index, show, destroy, update, addToCart, deleteFromCart, totalCart} = require("./src/flowerController");

const flowers = readJSONFile("./data", "flowers.json");
const cart = readJSONFile("./data", "customerCart.json")

const inform = console.log;

function run() {
  const action = process.argv[2];
  const flower = process.argv[3];


  let writeToFile = false;
  let writeToFileCart = false;
  let updatedFlowers = [];
  let updatedCart = []; 

  switch (action) {
    case "index":
      const flowersView = index(flowers);
      inform(flowersView);
      break;
    case "create":
      updatedFlowers = create(flowers, flower); //flowers is the array, flower is the flower that is being added.
      writeToFile = true;
      break;
    case "show":
      const flowerView = show(flowers, flower);  
      inform(flowerView);
      break;
    case "addToCart":
      updatedCart = addToCart(flowers, flower, cart);
      writeToFileCart = true
      break; 
    case "totalCart":
      inform(totalCart(cart));
      break;
    case "deleteFromCart":
      updatedCart = deleteFromCart(cart, flower); 
      writeToFileCart = true 
      break;
    case "update":
      updatedFlowers = update(flowers, flower, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedFlowers = destroy(flowers, flower);
      writeToFile = true;
      break;
    case "cancel": // "cancel" works without the function because of the switch statment where in any case "cancel" is used, it returns an empty array being "updatedCart" writeToFileCart = true;
      break;

    default:
      inform("There was an error.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "flowers.json", updatedFlowers);
  }
  if (writeToFileCart) {
    writeJSONFile("./data", "customerCart.json", updatedCart);
  }
}

run();

