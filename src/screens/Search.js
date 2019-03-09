import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button, Icon } from 'react-native-elements';


export class Search extends Component {
    state = {
        searchInput: '',
        isLoading: false
    }

    onUserSearch() {
        this.setState({ isLoading: true })
        fetch(`http://www.omdbapi.com/?s=${this.state.searchInput}&apikey=79fe984`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ isLoading: false })
            this.props.navigation.navigate('SearchResults', {searchResults: data.Search})

        })
        .catch((error) => this.setState({ isLoading: false}))
    }

    render() {
        const { container, textStyle, imageBackground } = styles
        return (
            <View style={container}>
                <ImageBackground source={require('../../assets/background.png')} style={{ width: 'auto', height: '90%', justifyContent: 'center' }} imageStyle={{ opacity: 0.05, width: '100%', height: 'auto', resizeMode: 'contain' }} >
                    <View style={{ padding: 30 }}>
                        <Text style={textStyle}>Search For A Movie!</Text>
                        <TextField
                            fontSize={24}
                            textColor={'blue'}
                            label='Search here...'
                            value={this.state.searchInput}
                            onChangeText={ (newText) => this.setState({ searchInput: newText }) }
                        />
                        {
                            this.state.isLoading ? 
                                <ActivityIndicator size={'large'} /> : 
                                <Button
                                    buttonStyle={{ marginTop: 20 }}
                                    icon={
                                        <Icon
                                        name="search"
                                        size={15}
                                        color="white"
                                        />
                                    }
                                    title="  Search"
                                    onPress={() => this.onUserSearch()}
                                />

                        }
                    </View>
                </ImageBackground>
            </View>
        )    
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    textStyle: {
        fontSize: 36,
        color: '#1e1e1e',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
    },
})