//
// Tests of Clock.jsx component.
//  requires install of: https://www.npmjs.com/package/react-addons-test-utils
//  npm install react-addons-test-utils --save-dev
// and make sure  react  and react-dom versions matches to react-addons-test-utils
// At that time there were:
//  npm install react@15.4.2 react-dom@15.4.2 --save
//
// expect(...).toExist()  Assertion  no longer exist.
// [New API](https://facebook.github.io/jest/docs/en/expect.html)
//
//  P.S.  New React version has Test Utilities included.
//  [Test Utilities](https://reactjs.org/docs/test-utils.html)
//
// Note: React 14 React Router 3.
var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');
var $ = require('jQuery');  /// For testing rendered input.


var  ReactTestUtils = require('react-addons-test-utils');
// On newer version of the react:
// var  ReactTestUtils = require('react-dom/test-utils');

// Component to test.
var Clock = require('Clock');

describe('Clock', () => {   // Name of Group of tests.

  it('It should exist', () => {   /// One of the tests of the Group "Clock"
    /// [New Michael Jackson's expect API](https://facebook.github.io/jest/docs/en/expect.html)
    // Assertion 1: (Note: .toExist()  Assertion has been depretiated, and  replaced by .toBeThruthy() in the API )
    expect(Clock).toBeTruthy();
  });

  describe('render', () => {
      it('should render clock to output', () => {
         // Black majick from React documentation.
          var clock = ReactTestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
          // Using jQuery  to get  elements  from DOM
          // Black majick from React documentation.
          var $el = $(ReactDOM.findDOMNode(clock));  // select rendered React component clock in  jQuery object
          var actualText = $el.find('.clock-text').text();   // extract text from $el jQuery object.

          expect(actualText).toBe('01:02');
      });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock/>);  ///  JSX code as input to the method
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect (actual).toBe(expected);
    });

    it('should format seconds when min/sec are less then 10', () => {
      var clock = ReactTestUtils.renderIntoDocument(<Clock/>);  ///  JSX code as input to the method
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect (actual).toBe(expected);
    });

  });

});
