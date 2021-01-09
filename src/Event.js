import React, { Component } from "react";

class Event extends Component {
  state = {
    revealDetails: false,
  };

  handleRevealDetails = () => {
    if(this.state.revealDetails === false){
      this.setState({ revealDetails: true });
    } else {
      this.setState({revealDetails: false });
    }
  };
  
  render() {
    return (
      <div className="Event">
        <div className="eventOverview">
          <p className="eventStartTime">
            {this.props.event.start.dateTime}
          </p>
          <p className="eventSummary">
            {this.props.event.summary}
          </p>
          <button
          className="detail-btn"
          onClick={() => this.handleRevealDetails()}>
            reveal
          </button>
        </div>
      </div>
    );
  }
}
export default Event;