import { createStackNavigator, createAppContainer } from 'react-navigation'
import { SearchResults } from './screens/SearchResults'
import Search from './screens/Search'


const MyApp = createStackNavigator({
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

export default Navigator = createAppContainer(MyApp)
