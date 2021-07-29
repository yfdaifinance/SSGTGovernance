const { usePlugin } = require('@nomiclabs/buidler/config')
const hooks = require('./scripts/buidler-hooks')

usePlugin('@aragon/buidler-aragon')

module.exports = {
  // Default Buidler configurations. Read more about it at https://buidler.dev/config/
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    rinkeby: {
      url: 'https://rinkeby.eth.aragon.network',
      // accounts: ["0xa8a54b2d8197bc0b19bb8a084031be71835580a01e70a45a13babd16c9bc1563"]
      accounts: ["0x4d93e17a7d53f6f65db0485cf805a9b5a8cdb80fce80b3ce86546249228e2789"],
    },
  },
  solc: {
    version: '0.4.24',
    optimizer: {
      enabled: true,
      runs: 10000,
    },
  },
  // Etherscan plugin configuration. Learn more at https://github.com/nomiclabs/buidler/tree/master/packages/buidler-etherscan
  etherscan: {
    apiKey: 'Q7ZDCG26YC7Q6WM26KZQFUHFFBBDZRTCNM', // API Key for smart contract verification. Get yours at https://etherscan.io/apis
  },
  // Aragon plugin configuration
  aragon: {
    appServePort: 8001,
    clientServePort: 3000,
    appSrcPath: 'app/',
    appBuildOutputPath: 'dist/',
    appName: 'app',
    hooks, // Path to script hooks
  },
}
