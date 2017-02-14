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
