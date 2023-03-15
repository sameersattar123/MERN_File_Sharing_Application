import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./Services/Api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  console.log(file);
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  const fileInputRef = useRef();
  const url =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
  useEffect(() => {
    const getImage = async() => {
      const data = new FormData();
      if (file) {
        data.append("file", file);
        data.append("name", file.name);
      }
      const response = await uploadFile(data)
      setResult(response.path)
    };
    getImage();
  }, [file]);
  return (
    <>
      <div className="container">
        <img src={url} alt="" />
        <div className="wrapper">
          <h1>Simple File Sharing</h1>
          <p>Upload and share the download link.</p>
          <button onClick={() => onUploadClick()}>Upload</button>
          <input
            type="file"
            name=""
            id=""
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <a href={result} target="_blank" >{result}</a> 
        </div>
      </div>
    </>
  );
}

export default App;
