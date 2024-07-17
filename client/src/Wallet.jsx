import server from "./server";

import * as secp from 'ethereum-cryptography/secp256k1';
import { toHex } from 'ethereum-cryptography/utils'; 

function Wallet({ balance, setBalance, address, setAddress, privateKey, setPrivatekey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivatekey(privateKey);
    const address = toHex(secp.secp256k1.getPublicKey(privateKey,false));
   
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type in a Private Key" 
               value={privateKey}
               onChange={onChange}
        ></input>
      </label>

      <div>
        Address: {address}
      </div>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
