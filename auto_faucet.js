const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const faucetUrl = 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia';
const walletAddress = 'your_wallet_address_here';
const recaptchaToken = 'your_recaptcha_token_here'; // Ganti dengan token reCAPTCHA yang valid
const email = 'your_email_here'; // Ganti dengan email yang digunakan

const configPath = path.resolve(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const delayInMilliseconds = config.delayInHours * 60 * 60 * 1000;

async function claimFaucet() {
    const lastClaimTime = new Date(config.lastClaimTimes[email] || 0);
    const now = new Date();

    if (now - lastClaimTime >= delayInMilliseconds) {
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

        // Perbarui timestamp terakhir klaim
        config.lastClaimTimes[email] = now.toISOString();
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

        console.log('Faucet claim successful');
    } else {
        console.log('Delay not yet met. Please wait before claiming again.');
    }
}

claimFaucet();
