import React, {Component} from 'react';
import MenuList from './Forms/MenuList';
import {AppRegistry} from 'react-native';
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const initialState = {
  articleList: null
}


const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
      case 'FETCH_FEED':
        {
          newState.articleList = action.URL.articles
          
        }
  }
  
   return newState
}

const store = createStore(reducer,applyMiddleware(thunk))

export default class Menu extends Component {
  render () {
    return (
      <Provider store={store}>
          <MenuList/>
      </Provider>
     
    );
  }
}

AppRegistry.registerComponent('HiverNews', () => Menu);

console.disableYellowBox = true;