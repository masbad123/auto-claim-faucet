# Auto Claim Faucet Script

This project provides an automation script to claim Ethereum Sepolia faucet using the API provided by the [Google Cloud Web3 Portal](https://cloud.google.com/application/web3/faucet/ethereum/sepolia).

## Prerequisites

- Node.js and npm installed on your system.
- An Ethereum wallet address.
- The URL endpoint and payload details obtained from the browser's developer tools.

## Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/masbad123/auto-claim-faucet.git
   ```

2. Navigate to the project directory:

   ```sh
   cd auto-claim-faucet
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

## Configuration

1. Open the `auto_faucet.js` file.

2. Replace the placeholder values with your actual Ethereum wallet address and any other necessary data:

   ```javascript
   const postData = {
       // Replace with the actual payload details
       "wallet_address": "your_wallet_address_here"
   };
   ```

3. Ensure that the `faucetUrl` is correct as per the details obtained from the developer tools:

   ```javascript
   const faucetUrl = 'https://cloud.google.com/application/web3/_/Web3Portal/data/batchexecute?...'; // Replace with the actual endpoint URL
   ```

## Usage

To run the script, use the following command:

```sh
npm start
```

The script will send a POST request to the specified API endpoint to claim the faucet for the provided Ethereum wallet address.

## Notes

- Ensure that the URL endpoint and payload details are accurate. You can use the browser's developer tools to inspect network requests and find the necessary information.
- This script is intended for educational purposes and should be used responsibly.
- Always comply with the terms of service and usage policies of the services you are interacting with.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
