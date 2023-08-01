import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Base64.parse("TVRJek5EVTJOemc1TURFeQ==");

//Encryption
export const encryption = (inputValue) => {
  const encryptData = CryptoJS.AES.encrypt(inputValue, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encryptData.toString();
};

//Decryption
export const decryption = (inputValue) => {
  const decryptData = CryptoJS.AES.decrypt(inputValue, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decryptData.toString(CryptoJS.enc.Utf8);
};
