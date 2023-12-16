import QRCode from "qrcode"
import { useState } from "react";
import './App.css';

function App() {
  const[url,setUrl]=useState("")
  const[qrcode,setQrcode]=useState("")

  const GenerateQRCode=()=>{
    QRCode.toDataURL(url,{
      width:800,
      margin:2,
    },(err,url)=>{
      if(err) return console.log(err)
    setQrcode(url)
    })

  }

  return (
    <div className="App">
      <h1>Qr Code Generator</h1>
      <input type='text' placeholder='e.g.https://google.com' value={url} onChange={(evt)=>setUrl(evt.target.value)}></input>
      <button onClick={GenerateQRCode}>Generator</button>
     {qrcode && <> <img src={qrcode}/>
     <a href={qrcode} download="qrcode.png">Download</a>
     </>}
    </div>
  );
}

export default App;





// Developed a web application leveraging React to generate QR codes dynamically from user-provided URLs. Utilized the QRCode library to convert URLs into Data URLs representing QR code images. Implemented functionalities to customize QR code dimensions and margins. Incorporated conditional rendering to display generated QR codes and provide download links for users. Enhanced user experience through a responsive and intuitive interface, allowing seamless QR code creation and download.
