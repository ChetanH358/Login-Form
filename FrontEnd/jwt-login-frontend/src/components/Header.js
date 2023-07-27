import React from "react";

function Header(props) {
  return (
    <header className="App-header">
      <img src={props.logoSrc} alt="logo" className="App-logo" />
      <h1 className="App-title">{props.pageTitle}</h1>
    </header>
  );
}

export default Header;
