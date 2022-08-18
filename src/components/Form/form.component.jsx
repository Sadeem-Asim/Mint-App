import React from "react";
import "./form.styles.scss";
// import FormInput from "../Form-Input/formInput.component";
// import Web3 from "web3";
import mintExampleAbi from "./../../mintExampleAbi.json";
import { ethers, BigNumber } from "ethers";
import { useState } from "react";

const Form = () => {
  const mintExampleAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [mintAmount, setMintAmount] = useState(1);
  const handleMint = async () => {
    setMintAmount(1);
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        mintExampleAddress,
        mintExampleAbi.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="form">
      <button onClick={handleMint} value="submit form" className="mint-button">
        Mint Nfts
      </button>
    </div>
  );
};

export default Form;
