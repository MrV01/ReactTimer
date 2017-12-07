//
var React = require('react');

var Clock = require('Clock');   // Clock.jsx component

var Timer = () => {
  return (
    <div>
    <h1 className="text-center page-title">Timer</h1>
      <Clock totalSeconds={429}/>
    </div>
  )
};

module.exports = Timer;
