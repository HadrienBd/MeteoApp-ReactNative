import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

export default class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Lille'
        }
    }

    setCity (city) {
        this.serState({
            city: city
        })
    }

    render () {

        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setCity(text)}
                    placeholder="Enter a city"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });