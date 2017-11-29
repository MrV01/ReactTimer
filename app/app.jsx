//  Rollback to React 14 (Way too many modifications in React 16)
//  Stick to Webpack 3.
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');

// Import PostCSS SCSS stylesheets from static files.
// require ('./app.pscss');
// Or inject Foundation into app.jsx  JS bundle using style-loader   npm module
require('style-loader!foundation-sites/dist/foundation.min.css');
// Foundation depends on jQuery.  jQuery included by definition.
// Fire up Foundation, using jQuery module loaded by webpack.
$(document).foundation();

//  Inject the app custom SASS including  Foundation styles overwrite
require('style-loader!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    {/*  history property  above instructs Router to enable Link feature */}
    {/*  root path below */}
      <Route path="/" component={Main}>
      {/*  path to Timer page (component) */}
        <Route path="timer" component={Timer}/>
        {/*  path to Countdown page (component) */}
          <Route path="countdown" component={Timer}/>
          {/*  Default route (does not match any path) URL and component in nav Menu */}
            <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
