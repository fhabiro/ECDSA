const secp = require('ethereum-cryptography/secp256k1');
const util = require('ethereum-cryptography/utils'); 


const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04e288e44704792f6d3dac31357c2ad2d75ea33bdc0e231662768863626390d11bbad9541fe7608e5ab73edf95c56e3337fb3e37eb8a77c6ce66a1c5d3c1d804fa": 100,
  "0493e34b7615d8f73183b76dc63049b42ff7d937e6bccdf02847aa8f9af12d0ab7220529140c0b5ea4c042da89e85276246a0329899c2c2c2b199b86b4353ba8a4": 50,
  "041d408c182482dde7b62b91517a899978407e36eb1326b814eab8906e52f9836fa7c0a37bfbc6e8a762d5e81cc268334b8a19ba493c4e79fecab146e8f6244bd3": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  const recipientH = util.toHex(secp.secp256k1.getPublicKey(recipient,false));

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipientH] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
