import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
// import { SearchResults } from './screens/SearchResults'
// import Search from './screens/Search'
// import { Profile } from './screens/Profile'
import { Profile, Search, SearchResults } from './screens'
import { Icon } from 'react-native-elements'


const searchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    SearchResults: {
        screen: SearchResults
    }
},
{
    // initialRouteName: ''
})

const MyApp = createBottomTabNavigator({
    Search: searchStack,
    Profile: Profile
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Search') {
          iconName = `search`;

        } else if (routeName === 'Profile') {
          iconName = `home`;
        }

        // You can return any component that you like here!
        return <Icon type={'AntDesign'} name={iconName} color='#000' />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  })

export default Navigator = createAppContainer(MyApp)
