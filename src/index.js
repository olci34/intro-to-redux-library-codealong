// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(shoppingListItemReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);
