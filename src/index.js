const Block = require("./Block");
const PolyChain = require("./BlockChain");
const polyChain = new PolyChain();

const blockToAdd = 5;

for (let i = 0; i < blockToAdd; i++) {
  polyChain.addNewBloc(
    new Block({
      sender: "Polycode",
      recive: "Youtube",
      message: `Bloque ${polyChain.chain.length} de cadenas agregado`,
    })
  );
}

// console.log(polyChain.isChainValid());

// polyChain.chain[3].data = {
//   sender: "Polycode",
//   recive: "Youtube",
//   message: "Este Bloque cambio la Temperatura",
// };

polyChain.chain.map((block) => {
  console.log(block);
});

console.log(polyChain.isChainValid());
