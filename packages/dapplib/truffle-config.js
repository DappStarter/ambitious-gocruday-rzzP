require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile provide hunt breeze outer silk'; 
let testAccounts = [
"0x4854ce66e90661604f0add3bc745e832cd723b3bf3b6e20fc177caae76a2f5ae",
"0xec982e94a7bac0b349549f38f3c813f0eadbb845eee38b0047188261b8d558ce",
"0x8cad6bd95cff37a831539ddd8c8bd8d6151bca1a185a2a9c646583ebdde5d84d",
"0xef16e0c834b12f4af7adc465b768ba128b3db19b83308417dc3d6ab67d5c3c36",
"0x7c97d5f7315aad28716cf060af6c18350fcd772cf3905346c4c8bb3ee974d422",
"0xf0bbf326c9bb0eab2046f2c5f9ecb36a8b1dc070294680ce3f314e02b5dc2cac",
"0xaf50f58233a695cc603f967b878df0713eede3fcf7b5e4b95962c5d179813f47",
"0xe843944a7348b23b3808cc62836a7c3484e980589f91aad29e14880a98f63281",
"0x8ebef8d031f66f2bccaba295a12c2b1f1fae995e069972fcc537c7efe6797a2e",
"0x1d4a7870976773cfd576bed6f29baba3e22c76370a08373d50b52b1165bb17e4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


