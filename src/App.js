import React, { Component } from "react";
import Counter from "./Counter";
import Say from "./say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        --------------Counter----------------
        <br />
        <br />
        <Counter />
        <br />
        <br />
        --------------Say----------------
        <br />
        <br />
        <Say />
        <br />
        <br />
        --------------EventPractice----------------
        <br />
        <br />
        <EventPractice />
        <br />
        <br />
        --------------ValidationSample----------------
        <br />
        <br />
        <ValidationSample />
        <br />
        <br />
        --------------ScrollBox----------------
        <br />
        <br />
        <ScrollBox ref={ref => (this.ScrollBox = ref)} />
        <br />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.ScrollBox.scrollToMid()}>중간으로</button>
        <button onClick={() => this.ScrollBox.scrollToTop()}>맨 위로</button>
        <br />
        <br />
        --------------IterationSample----------------
        <br />
        <br />
        <IterationSample />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
