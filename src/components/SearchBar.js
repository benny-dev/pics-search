import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Type a search term and press enter"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
