const { useState, useEffect } = require("react");
const QrCode = require("qrcode");

const useQrCode = (...args) => {
  const [qrCode, setQrCode] = useState(null);
  useEffect(() => {
    if (args.length && args[0]) {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      QrCode.toDataURL(canvas, ...args).then(res => setQrCode(res));
    }
  }, args);
  return qrCode;
};

module.exports = useQrCode;
