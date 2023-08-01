import React, { useState } from "react";
import { encryption, decryption } from "./dataEncryption";

import "./App.css";

function App() {
  const [dataForEncryption, setDataForEncryption] = useState("");
  const [dataForDecryption, setDataForDecryption] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  return (
    <div className="App">
      <h1>Encrypt</h1>
      <h3>{encrypted}</h3>
      <input
        type="text"
        value={dataForEncryption}
        onChange={(e) => {
          setDataForEncryption(e.target.value);

          setEncrypted(encryption(e.target.value));
        }}
      />

      <h1>Decrypt</h1>
      <h3>{decrypted}</h3>
      <input
        type="text"
        value={dataForDecryption}
        onChange={(e) => {
          setDataForDecryption(e.target.value);

          setDecrypted(decryption(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
