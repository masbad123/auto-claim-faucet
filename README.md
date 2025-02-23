# Auto Claim Faucet Script

This project provides an automation script to claim Ethereum Sepolia faucet using Puppeteer.

## Prerequisites

- Node.js and npm installed on your system.
- An Ethereum wallet address.
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

1. Open the `auto_faucet.js` file.

2. Replace the placeholder values with your actual Ethereum wallet address and reCAPTCHA token:

   ```javascript
   const walletAddress = 'your_wallet_address_here';
   const recaptchaToken = 'your_recaptcha_token_here'; // Replace with a valid reCAPTCHA token
   ```

3. Ensure that the selectors for the input fields and buttons are correct as per the details obtained from the developer tools:

   ```javascript
   await page.type('#walletAddress', walletAddress);
   await page.evaluate((token) => {
       document.querySelector('#recaptcha-token').value = token;
   }, recaptchaToken);
   await page.click('#claimButton');
   ```

## Usage

To run the script, use the following command:

```sh
npm start
```

The script will open a browser, navigate to the faucet page, fill in the wallet address and reCAPTCHA token, and click the claim button.

## Notes

- Ensure that the element selectors are accurate. You can use the browser's developer tools to inspect the HTML and find the necessary information.
- This script is intended for educational purposes and should be used responsibly.
- Always comply with the terms of service and usage policies of the services you are interacting with.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
