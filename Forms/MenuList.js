import React from 'react';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import NewsDetails from './NewsDetails';
import NestedStackNavigator from './NestedStackNavigator'

const RootStack= createDrawerNavigator({
  Dashboard: {
    screen: NestedStackNavigator,
    navigationOptions: {
      title: 'Dashboard',
    }, 
    
  }, 
  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: {
      title: 'NewsDetails',
    }, 
  
  }, 
    LoginForm: {
      screen: LoginForm,
      navigationOptions: {
        title: 'Logout',
      },     
    },
}, {
    initialRouteName: 'LoginForm',
    
},
);

const App = createAppContainer(RootStack);

export default App;