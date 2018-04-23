import React from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { subscribeToWebSocket } from './subscribeToWebSocket';
import EventViewer from './components/eventviewer';
import * as messageActions from './Messages/MessagesActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
      
     subscribeToWebSocket((err: Error, input: TradeMessage) => this.ProcessMessage(input));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  ProcessMessage(event) {
    console.log("message recieved");
    this.props.dispatch(messageActions.addMessage(event));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <EventViewer />
      </div>
    );
  }
}

export default connect()(App);
