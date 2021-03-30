const Block = require("./Block");

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const genesisDate = "01/01/2000";
    return new Block("Genesis BLock", 0, genesisDate);
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBloc(newBlock) {
    newBlock.index = this.getLastBlock().index + 1;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

module.exports = BlockChain;
