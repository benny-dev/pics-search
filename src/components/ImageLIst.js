import "./ImageList.css";
import React from "react";
import Image from "./Image";

const ImageList = (props) => {
  const images = props.images.map(function (image) {
    return <Image key={image.id} image={image} />;
  });

  return (
    <div
      className="image-list"
      style={{ padding: "15px", textAlign: "center" }}
    >
      {images}
    </div>
  );
};

export default ImageList;
