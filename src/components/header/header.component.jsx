import React from "react";
import "./header.styles.scss";
import MetaCard from "./../metaCard/metaCard.component";

const Header = () => {
  return (
    <div className="header">
      <div className="header-list">
        <h1>NFT-MINTING-APP</h1>
        <a className="header-anchor" href="/">
          Home
        </a>
        <a className="header-anchor" href="/">
          About
        </a>
        <a className="header-anchor" href="/">
          Contact
        </a>
        <div className="header-wallet">
          <MetaCard />
        </div>
      </div>
    </div>
  );
};

export default Header;
