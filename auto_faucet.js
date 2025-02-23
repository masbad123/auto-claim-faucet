const puppeteer = require('puppeteer');

const faucetUrl = 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia';
const walletAddress = 'your_wallet_address_here';
const recaptchaToken = 'your_recaptcha_token_here'; // Ganti dengan token reCAPTCHA yang valid

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(faucetUrl);

    // Isi alamat wallet address
    await page.type('#walletAddress', walletAddress);

    // Isi token reCAPTCHA
    await page.evaluate((token) => {
        document.querySelector('#recaptcha-token').value = token;
    }, recaptchaToken);

    // Klik tombol klaim faucet
    await page.click('#claimButton');

    // Tunggu beberapa detik untuk memastikan permintaan diproses
    await page.waitForTimeout(5000);

    await browser.close();
    console.log('Faucet claim successful');
})();
