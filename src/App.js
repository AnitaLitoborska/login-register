import React from "react";
import logo from './logo.svg';
import './App.css';
import { Login, Register } from "./components/login/index";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }

  render() {
    const { isLogginActive } = this.state;
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogginActive && <Login containerRef={(ref) => this.current = ref} />}
            {!isLogginActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
        </div>
      </div>
    )

  }
}
  const RightSide = props => {
    return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>

}


export default App;
