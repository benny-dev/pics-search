import React from "react";
import Image from "./Image";

class ImageList extends React.Component {
  renderImage(image) {
    return <Image key={image.id} src={image.urls.small} />;
  }

  render() {
    return (
      <div
        className="ui medium images"
        style={{ padding: "15px", textAlign: "center" }}
      >
        {this.props.images.map(this.renderImage)}
      </div>
    );
  }
}

export default ImageList;
