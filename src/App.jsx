import { useEffect, useState } from "react";
import "./App.css";
import "./loader/loader.css";

function App() {
  const [load, setLoad] = useState(true);

  const [imgData, setImgData] = useState("");

  useEffect(() => {
    setLoad(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}api/img`)
      .then((data) => data.json())
      .then((img) => {
        setImgData(img.img);
        setLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setLoad(false);
      });
  }, []);

  return (
    <>
      <div className="container">
        {load ? (
          <div class="lds-circle">
            <div></div>
          </div>
        ) : (
          <img src={imgData} alt="img" className="imgRes boxShadow" />
        )}
      </div>
    </>
  );
}

export default App;
