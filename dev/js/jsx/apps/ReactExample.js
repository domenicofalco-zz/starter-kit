// dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// components
import Heading from '../components/Heading'

// helpers
import HELPERS from '../../helpers/';

class CardLoadApp extends React.Component {
  constructor() {
    super();
    this.windowWidth = this.windowWidth.bind(this);
  }

  windowWidth() {
    let w = HELPERS.getWindowSize().width;
    alert(w);
  }

  render() {
    return <div>
      <Heading title={'This is a React-App'} />
      <h5><a href='javascript:void(0)' onClick={this.windowWidth}>get window width</a></h5>
      <hr />
    </div>;
  }
}

export default CardLoadApp;
