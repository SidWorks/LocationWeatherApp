import React from "react";
import ReactDOM from "react-dom";
import Spiner from "./spinner";

import SeasonDisplay from "./seasondisplay";

class App extends React.Component {
  state = { lat: null, long: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errMsg: err.message })
    );
  }
  renderElement() {
    if (this.state.errMsg && !this.state.lat)
      return <h1>Error : {this.state.errMsg}</h1>;
    if (!this.state.errMsg && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;

    return <Spiner />;
  }
  render() {
    return <div className="border">{this.renderElement()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
