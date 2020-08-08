require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile public install indoor food term'; 
let testAccounts = [
"0xbd91f5080cf154be89d4f75ffa57963336574a56cc496ea031556424824cc738",
"0xf690a508271a8fda228a827f2f5d7cf71472a6b8d9f320567b0b1d6cd6b59573",
"0x2ff3d9794878e1abd358d10689567ee25c33c51e0d9e3ea7c3715958d8681a25",
"0x29d3b500fde35c6036519957c0ea3d21b9f20365dc82c61699939b01eb99ccc6",
"0x3e774a6c048c22e2d5bb9866996ea38bbdaf8b3a55115115d5120a9591e746fd",
"0xbec8c621342614b4f185d7b9ed3a7045818657b8fdfe85df94738d6616315080",
"0x1ac3da3821ba93abd6be303acb381cd7e9ef8964bb8c73b3d005ba5d05be89c0",
"0x7151fa3939e7ce7beea9968563c3df0db1bfb47ff6ab754f332056e7ac6d011a",
"0x1a3a59aabc8e06f0aaf969b8209cce2ee8770d439afacf40b8b725785eaa4bbf",
"0x9644522a7cdaaa7deb2741178453085f402139c226c202c606ba3dfc95dbf013"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
