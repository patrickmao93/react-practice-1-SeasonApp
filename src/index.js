import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeansonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    //get current latitude and update state
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }));
  }

  renderContent() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else {
      return <Spinner message="Please accept request!" />
    }
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
