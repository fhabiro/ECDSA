const secp = require("ethereum-cryptography/secp256k1");
const {toHex} = require("ethereum-cryptography/utils")

// const privatekey = toHex(secp.secp256k1.utils.randomPrivateKey());
const privatekey = "2b584df48dcf617b6a695c4cf472a0bd255c873c61b26c39be36de3649a1ca23"
const privateKeyBytes = new Uint8Array(privatekey.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
console.log("//",privateKeyBytes);

const publickey = toHex(secp.secp256k1.getPublicKey(privatekey)); 
console.log(publickey);