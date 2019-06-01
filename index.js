const Block = require('./src/scripts/Block');

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

const main = () => {
  createBlockchain(3);
}

main();


