const Block = require("./Block");

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 5;
  }

  createGenesisBlock() {
    const genesisDate = new Date();
    return new Block("Genesis BLock", 0, genesisDate, "0");
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBloc(newBlock) {
    newBlock.previousHash = this.getLastBlock().hash;
    newBlock.index = this.getLastBlock().index + 1;
    newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    const chain = this.chain;

    for (let i = 0; i < chain.length; i++) {
      if (chain[i].hash !== chain[i].calculateHash()) {
        console.log(`Block ${i} has bee corrupted`);
        return false;
      }

      if (i > 0 && chain[i].previousHash !== chain[i - 1].hash) {
        console.log(`Block ${i - 1} has been corrupted`);
        return false;
      }
    }

    console.log("Chain is valid");
    return true;
  }
}

module.exports = BlockChain;
