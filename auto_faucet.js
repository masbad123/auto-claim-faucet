const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const faucetUrl = 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia';
const recaptchaToken = 'your_recaptcha_token_here'; // Ganti dengan token reCAPTCHA yang valid

const configPath = path.resolve(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const delayInMilliseconds = config.delayInHours * 60 * 60 * 1000;

async function claimFaucet(email, walletAddress) {
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

    console.log(`Faucet claim successful for ${email}`);
}

async function processAccounts() {
    const now = new Date();

    for (const account of config.accounts) {
        const lastClaimTime = new Date(account.lastClaimTime || 0);

        if (now - lastClaimTime >= delayInMilliseconds) {
            await claimFaucet(account.email, account.walletAddress);

            // Perbarui timestamp terakhir klaim
            account.lastClaimTime = now.toISOString();
        } else {
            const remainingTime = delayInMilliseconds - (now - lastClaimTime);
            console.log(`Delay not yet met for ${account.email}. Please wait ${Math.ceil(remainingTime / (1000 * 60 * 60))} hours before claiming again.`);
        }
    }

    // Simpan pembaruan ke file konfigurasi
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

processAccounts();
