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

  componentWillMount() {
    this.updateDate();

    setInterval(this.updateDate.bind(this), 5000);
  }

  updateDate() {
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    this.props.settings.set('time',
      `${this.pad(new Date().getHours().toString())}:${this.pad(new Date().getMinutes().toString())}`
    );
    // this.props.settings.set('day', days[new Date().getDay()]);
    this.props.settings.set('day', days[3]);
    this.props.settings.set('date', `${months[new Date().getMonth()]} ${new Date().getDate()}`);
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
          {this.props.settings.get('time')}
        </h1>
        <div className="uk-flex-item-1 uk-flex uk-flex-column uk-margin-small-left">
          <div className="uk-flex-item-1 uk-flex uk-flex-bottom">
            <h2 className="uk-margin-bottom-remove day">{this.props.settings.get('day')}</h2>
          </div>
          <div className="uk-flex-item-1">
            <h2 className="uk-margin-bottom-remove date">{this.props.settings.get('date')}</h2>
          </div>
        </div>
      </div>
    );
  }
}
