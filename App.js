import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GiaoDien from './src/GiaoDien';

const defaultState = {
    value: 0,
    highlight: false
};

const reducer = (state = defaultState, action) => {
    // if (action.type === 'UP')
    //     return { value: state.value + 1 };
    // if (action.type === 'DOWN')
    //     return { value: state.value - 1 };

    switch (action.type) {
        case 'UP': {
            return {value: state.value + 1, highlight: state.highlight };
        }
        case 'DOWN': {
           return { value: state.value - 1, highlight: state.highlight};
        }
        case 'CHANGECOLOR':{
            return {
                value: state.value, highlight: !state.highlight
            };
        }

    }
    return state;

}

const store = createStore(reducer);



export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GiaoDien />
            </Provider>
        );
    }
}
