const axios = require('axios');

// URL dari faucet API yang ditemukan dari alat pengembang
const faucetUrl = 'https://cloud.google.com/application/web3/_/Web3Portal/data/batchexecute?rpcids=lMZlm&source-path=%2Fapplication%2Fweb3%2Ffaucet%2Fethereum%2Fsepolia&bl=boq_cloud-web3-portal-web-ui_20250220.07_p0&f.sid=7826119320332474033&hl=en-US&_reqid=263784&rt=c'; 

// Data yang dikirim dalam permintaan POST
const postData = {
    // Sesuaikan dengan payload yang ditemukan dari alat pengembang
    "wallet_address": "your_wallet_address_here"
};

async function claimFaucet() {
    try {
        const response = await axios.post(faucetUrl, postData, {
            headers: {
                'Content-Type': 'application/json',
                // Tambahkan header lain yang diperlukan
            }
        });

        if (response.status === 200) {
            console.log('Faucet claim successful:', response.data);
        } else {
            console.log('Failed to claim faucet:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error claiming faucet:', error.message);
    }
}

claimFaucet();
