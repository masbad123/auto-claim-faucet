# Auto Claim Faucet Script

This project provides an automation script to claim Ethereum Sepolia faucet using Puppeteer, with a delay mechanism per email address and support for multiple accounts.

## Prerequisites

- Node.js and npm installed on your system.
- An Ethereum wallet address for each email account.
- A valid reCAPTCHA token.
- The URL endpoint and element selectors obtained from the browser's developer tools.

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

1. Open the `src/config.json` file.

2. Add your email addresses, wallet addresses, and set the initial timestamps and delay:

   ```json
   {
     "accounts": [
       {
         "email": "example1@gmail.com",
         "walletAddress": "wallet_address_1",
         "lastClaimTime": "2025-02-20T10:00:00Z"
       },
       {
         "email": "example2@gmail.com",
         "walletAddress": "wallet_address_2",
         "lastClaimTime": "2025-02-20T10:00:00Z"
       }
     ],
     "delayInHours": 24
   }
   ```

3. Open the `src/auto_faucet.js` file.

4. Replace the placeholder value with your actual reCAPTCHA token:

   ```javascript
   const recaptchaToken = 'your_recaptcha_token_here'; // Replace with a valid reCAPTCHA token
   ```

5. Ensure that the selectors for the input fields and buttons are correct as per the details obtained from the developer tools:

   ```javascript
   const walletSelector = 'input[name="wallet_address"]'; // Update the selector to match the correct element
   const claimButtonSelector = 'button[type="submit"]'; // Update the selector to match the correct element
   ```

## Usage

To run the script, use the following command:

```sh
npm start
```

The script will open a browser, navigate to the faucet page, fill in the wallet address and reCAPTCHA token, and click the claim button if the delay has been met for each account.

## Notes

- Ensure that the element selectors are accurate. You can use the browser's developer tools to inspect the HTML and find the necessary information.
- This script is intended for educational purposes and should be used responsibly.
- Always comply with the terms of service and usage policies of the services you are interacting with.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
