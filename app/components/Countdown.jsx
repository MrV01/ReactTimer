var React = require('react');

var Clock = require('Clock');   // Clock.jsx component

var Countdown = React.createClass({

  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Coundown</h1>
        <Clock totalSeconds={129}/>
      </div>
    );
 }

});

module.exports = Countdown;
