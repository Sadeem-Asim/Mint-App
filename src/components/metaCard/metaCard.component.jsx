import React, { useState } from "react";
import { formatEther } from "ethers/lib/utils";
import "./metaCard.styles.scss";

const MetaCard = () => {
  const [userAccount, setUserAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };
  const accountChangeHandler = (result) => {
    setUserAccount(result);
    getUserBalance(result);
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((result) => setUserBalance(formatEther(result)));
  };

  // window.ethereum.on("accountsChanged", accountChangeHandler);

  return (
    <div className="meta-card">
      {errorMessage}
      {!userAccount ? (
        <div>
          <button className="connectButton" onClick={connectWalletHandler}>
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="userInfo">
          <p>
            Connected: {userAccount}
            {userBalance}
          </p>
        </div>
      )}
    </div>
  );
};
export default MetaCard;
