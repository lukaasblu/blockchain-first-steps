const sha256 = require('js-sha256').sha256;

class Block {
  constructor(index, timestamp, data, prevHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = sha256(
      this.index +
      this.timestamp +
      this.data +
      this.prevHash
    );
  }
}

const createGenesisBlock = () => new Block(0, new Date(), 'Genesis Block', '0');

const nextBlock = (lastBlock, data) =>
  new Block(lastBlock.index + 1, new Date(), data, lastBlock.hash);

const createBlockchain = num => {
  const blockchain = [createGenesisBlock()];
  let previousBlock = blockchain[0];

  for (let i = 1; i < num; i++) {
    const blockToAdd = nextBlock(previousBlock, `This is block #${i}`);
    blockchain.push(blockToAdd);
    previousBlock = blockToAdd;
  }

  console.log(blockchain);
}

createBlockchain(3);

