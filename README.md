# FundMe - Decentralized Funding Smart Contract

## Overview
FundMe is a decentralized funding smart contract built using Solidity. It allows users to contribute funds while ensuring that donations meet a minimum threshold based on real-time USD conversion. The project utilizes **Chainlink Price Feeds** for accurate price data and is deployed using **Hardhat**.

## Features
- Accepts funding from users
- Sets a minimum funding amount in USD
- Integrates **Chainlink Price Feeds** to determine ETH/USD conversion
- Allows the contract owner to withdraw funds
- Implements gas optimization for efficient transactions

## Technologies Used
- Solidity
- Hardhat
- Chainlink Price Feeds
- ethers.js
- Mocha & Chai (for testing)

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/fundme.git
   cd fundme
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add:
     ```sh
     PRIVATE_KEY=your_wallet_private_key
     INFURA_RPC_URL=your_infura_or_alchemy_url
     ETHERSCAN_API_KEY=your_etherscan_api_key
     ```

## Usage
### Deploy the Contract
Run the following command to deploy the contract:
```sh
yarn hardhat run scripts/deploy.js --network sepolia
```

### Interact with the Contract
- **Fund the contract:**
  ```sh
  yarn hardhat run scripts/fund.js --network sepolia
  ```
- **Withdraw funds (owner only):**
  ```sh
  yarn hardhat run scripts/withdraw.js --network sepolia
  ```

## Testing
Run unit tests using Hardhat:
```sh
yarn hardhat test
```

## License
This project is licensed under the MIT License.

## Acknowledgments
- Inspired by [Patrick Collins' Solidity Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ)


