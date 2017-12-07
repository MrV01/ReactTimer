// Presentational component
var React = require('react');

// Requires moment.js to prodice nice  formatted output.
//npm install  moment  --save
//http://momentjs.com/docs/
var moment = require('moment');


var Clock = React.createClass ( {
  // States of Clock
  getDefaultProps: function () {
      totalSeconds: 0
  },
  propTypes: {
      totalSeconds: React.PropTypes.number
  },
  // Clock's functions
  formatSeconds: function (totalSeconds) {
      return moment("1900-01-01 00:00:00").add(totalSeconds,'seconds').format('mm:ss') ;
  },

  render: function () {
    var {totalSeconds} = this.props;
    return (
        <div className="clock">
            <span className="clock-text">
                {this.formatSeconds(totalSeconds)}
            </span>
        </div>
    );
}
});


module.exports = Clock;
