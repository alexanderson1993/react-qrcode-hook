const { useState, useEffect } = require("react");
const QrCode = require("qrcode");

const useQrCode = (code)=> {
  const [qrCode, setQrCode] = useState(null);
  useEffect(() => {
    if (code) {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      QrCode.toDataURL(canvas, code).then(res => setQrCode(res));
    }
  }, [code]);
  return qrCode;
} 

module.exports = useQrCode;