import React, { useState } from "react";
import './myimage.css'


function MyImage({ imgs = [{ url: "" }] }) {

    const [mainImage, setMainImage] = useState(imgs[0]);


  return (
    <>

    <div className="myimage-container">

    {/* <div className="four-images">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div> */}

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    
    </div> 

    </>
  )
}

export default MyImage