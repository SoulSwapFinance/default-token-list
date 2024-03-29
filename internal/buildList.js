const { version } = require("../package.json");

const ethereum = require("../tokens/ethereum.json");
const fantom = require("../tokens/fantom.json");
const bsc = require("../tokens/bsc.json");
const matic = require("../tokens/matic.json");
const avalanche = require("../tokens/avalanche.json");
const moonriver = require("../tokens/moonriver.json");
const telos = require("../tokens/telos.json");
// const fantomTestnet = require("../tokens/fantom-testnet.json");
// const ropsten = require("../tokens/ropsten.json");
// const rinkeby = require("../tokens/rinkeby.json");
// const goerli = require("../tokens/goerli.json");
// const kovan = require("../tokens/kovan.json");
// const maticTestnet = require("../tokens/matic-testnet.json");
// const xdai = require("../tokens/xdai.json");
// const bscTestnet = require("../tokens/bsc-testnet.json");
// const moonbase = require("../tokens/moonbase.json");
// const fuji = require("../tokens/fuji.json");
// const heco = require("../tokens/heco.json");
// const hecoTestnet = require("../tokens/heco-testnet.json");
// const harmony = require("../tokens/harmony.json");
// const harmonyTestnet = require("../tokens/harmony-testnet.json");
// const okex = require("../tokens/okex.json");
// const okexTestnet = require("../tokens/okex-testnet.json");
// const arbitrum = require("../tokens/arbitrum.json");
// const celo = require("../tokens/celo.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "SoulSwap Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    // tags: {},
    logoURI: "https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets/0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07/logo.png",
    // keywords: ["soulswap", "default"],
    tokens: [
      ...ethereum,
      ...fantom,
      ...bsc,
      ...matic,
      ...avalanche,
      ...moonriver,
      ...telos,
      // ...fantomTestnet,
      // ...ropsten,
      // ...goerli,
      // ...kovan,
      // ...rinkeby,
      // ...maticTestnet,
      // ...xdai,
      // ...bscTestnet,
      // ...moonbase,
      // ...fuji,
      // ...heco,
      // ...hecoTestnet,
      // ...harmony,
      // ...harmonyTestnet,
      // ...okex,
      // ...okexTestnet,
      // ...arbitrum,
      // ...celo,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
