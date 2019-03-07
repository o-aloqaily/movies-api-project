import React from 'react'
import { View, Text, StyleSheet, ImageBackground,
    ActivityIndicator, FlatList, Linking } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'


export const SearchResults = (props) => {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={ { paddingBottom: 30 } }
                    data={props.navigation.getParam('searchResults')}
                    renderItem={({item}) => {
                        return (
                            <Card
                                title={item.Title}
                                image={{uri: item.Poster}}
                            >
                                <Text style={{marginBottom: 10}}>
                                    { `${item.Type}, ${item.Year}` }
                                </Text>
                                <Button
                                    icon={<Icon type={'AntDesign'} name='info' color='#ffffff' />}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='  VIEW NOW'
                                    onPress={() => Linking.openURL(`https://www.imdb.com/title/${item.imdbID}/`)}
                                />
                            </Card>    
                        )
                    }}
                />
            </View>
        )    
    }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 36,
        color: '#1e1e1e',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold'
    },
})