import { createStackNavigator, createAppContainer } from "react-navigation";
import Dashboard from './Dashboard';
import NewsDetails from './NewsDetails';


const DetailsNavigator = createStackNavigator({
    NewsDetails: {
      screen: NewsDetails
    },
    Dashboard: {
        screen: Dashboard
      }
      
  },{
    initialRouteName: 'Dashboard',
    
},
  
  );
  
  const NestedStackNavigator = createAppContainer(DetailsNavigator) ;

  export default NestedStackNavigator