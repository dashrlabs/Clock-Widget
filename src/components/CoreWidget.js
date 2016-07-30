/** Do not rename this file **/
import React from 'react';

export default class clockWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'clock';
  static widgetName = 'Clock';
  static sizes = [[2, 1]];

  constructor(...args) {
    super(...args);

    this.state = this.generateDate();

    setInterval(() => this.setState(this.generateDate), 5000);
  }

  generateDate() {
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    return {
      time: `${this.pad(new Date().getHours().toString())}:${this.pad(new Date().getMinutes().toString())}`,
      day: days[new Date().getDay()],
      date: `${months[new Date().getMonth()]} ${new Date().getDate()}`,
    };
  }

  pad(str) {
    return (str.length > 1) ? str : `0${str}`;
  }

  render() {
    return (
      <div className="uk-flex container">
        <h1
          className="uk-flex-item-1 uk-flex uk-flex-middle uk-flex-right uk-margin-bottom-remove uk-margin-small-right time"
        >
          {this.state.time}
        </h1>
        <div className="uk-flex-item-1 uk-flex uk-flex-column uk-margin-small-left">
          <div className="uk-flex-item-1 uk-flex uk-flex-bottom">
            <h2 className="uk-margin-bottom-remove day">{this.state.day}</h2>
          </div>
          <div className="uk-flex-item-1">
            <h2 className="uk-margin-bottom-remove date">{this.state.date}</h2>
          </div>
        </div>
      </div>
    );
  }
}
