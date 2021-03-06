var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text"><span>React Timer App</span></li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active-link">Countdown</Link>
              </li>
            </ul>
          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                <span> Created by <a href="https://github.com/MrV01/ReactTimer.git" target="_blank" >Mr. V</a></span>
            </li>
            </ul>
          </div>

        </div>
    );

  }

});

module.exports = Nav;
