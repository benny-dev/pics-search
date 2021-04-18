import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageLIst";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID MSEfh4s98gkmDUPIl5gWTisWa4Wf4f6TkcOflpubEDE",
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <div style={{ textAlign: "center" }}>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
