import * as React from 'react';
import { connect } from "react-redux";


class EventViewer extends React.Component {
  
  renderEvents() {
    return this.props.messages.map((m, i) =>{
      return (
        <li>{m}</li>
      );
    });
  }
  
  render() {
    return (
      <div className="eventviewer">
        <ul>
          {this.renderEvents()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.received
  };
}

export default connect(mapStateToProps)(EventViewer);