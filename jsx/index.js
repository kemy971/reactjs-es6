import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {render} from 'react-dom';
import App from './components/App';
import todos from './reducers/todos'

let store = createStore(todos);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));