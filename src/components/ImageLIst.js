import React from "react";

const ImageList = (props) => {
  const images = props.images.map(function ({ id, urls, description }) {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return (
    <div
      className="ui medium images"
      style={{ padding: "15px", textAlign: "center" }}
    >
      {images};
    </div>
  );
};

export default ImageList;
