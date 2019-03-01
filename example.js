import React from "react";
import { render } from "react-dom";
import useQrCode from "./";

function App() {
  const qrCode = useQrCode("Hello there!");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img alt="qr code" src={qrCode} />
    </div>
  );
}

render(<App />, window.root);
