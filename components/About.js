import React, {Component} from 'react'
import { View, Text , StyleSheet, ActivityIndicator} from 'react-native'

export default class About extends Component {

    render () {
        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>Lorem Ipsum</Text>
                <ActivityIndicator style={style.view } color="#FF0000" size="large" animating={true} />
            </View>
        )
    }

}


const style = StyleSheet.create({
    view: {
        margin: 20
    },
    title:{
        fontSize: 22,
        marginBottom: 20
    }
})