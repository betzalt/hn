import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button } from 'react-mdl';

class HNApp extends React.Component {
  render() {
    return (
      <Button ripple>Hello, World!</Button>
    );
  }
}

export default connect(state => state)(HNApp);
