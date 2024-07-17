const secp = require("ethereum-cryptography/secp256k1");
const utils = require("ethereum-cryptography/utils");

const privateKey = secp.secp256k1.utils.randomPrivateKey();

console.log ("private Key:", utils.toHex(privateKey));

const publicKey = secp.secp256k1.getPublicKey(privateKey,false);

console.log("public Key:", utils.toHex(publicKey));

// b3baeba00172fb8333e792b5467e14380ccbf648fe699002cd5fc0ae48626400
const publicKey2 = secp.secp256k1.getPublicKey("b3baeba00172fb8333e792b5467e14380ccbf648fe699002cd5fc0ae48626400",false);
console.log("public Key2:", utils.toHex(publicKey2));

//private Key: 184b93604ebdcd5e797a055f3867d06a1232eb181e4dcdf2aa21420e37f4868e
//public Key: 04e288e44704792f6d3dac31357c2ad2d75ea33bdc0e231662768863626390d11bbad9541fe7608e5ab73edf95c56e3337fb3e37eb8a77c6ce66a1c5d3c1d804fa
//PS F:\project\ecdsa-node\server> node scripts/generate.js
//private Key: b33cf34461ebba0d606035e5394ac554574f4ef5caf8c4ec85877ace4c749bea
//public Key: 0493e34b7615d8f73183b76dc63049b42ff7d937e6bccdf02847aa8f9af12d0ab7220529140c0b5ea4c042da89e85276246a0329899c2c2c2b199b86b4353ba8a4
//PS F:\project\ecdsa-node\server> node scripts/generate.js
//private Key: d5d2867861f7afc534f548f84b192149d0f4b81776dd1dcabdf52ea91118cd19
//public Key: 041d408c182482dde7b62b91517a899978407e36eb1326b814eab8906e52f9836fa7c0a37bfbc6e8a762d5e81cc268334b8a19ba493c4e79fecab146e8f6244bd3
