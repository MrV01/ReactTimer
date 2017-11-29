// Rollback to React 14
// Webpack 3.
var React = require('react');

// Custom components
var Nav = require('Nav');

// Import sampleImage
var sampleImage  = require( '../assets/images/sampleimage.jpg');

// Refactored version, "presentation component only featue of React"
var Main = (props) => {
  return (
    <div>
      <Nav/>
      {/* Including  Legacy Float Grid */}
      <div className="row">
        {/* medium screen = 6 columns out of 12, large =3 /12 , small = centered , takes 12/12 coumns */}
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>

      {/* My little extra Image  */}
      <img src={ sampleImage } alt='Sample Image' />
    </div>
  );
};

module.exports = Main;
