import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './state';
import HNApp from './components/HNApp';

const store = applyMiddleware(thunk)(createStore)(reducers);

ReactDOM.render((
  <Provider store={store}>
    <HNApp />
  </Provider>
), document.getElementById('react-root'));
