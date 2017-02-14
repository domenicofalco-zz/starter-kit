/*
  Components are not stand alone apps.
  They need to be wrapped in applications ("../apps" folder).
  The components stand for dumb objects that get data & logic from apps.
*/

// dependencies
import React from 'react'
import ReactDOM from 'react-dom'

class Heading extends React.Component {
  render() {

    return <div>
      <h1>{this.props.title}</h1>
    </div>
  }
}

export default Heading;
