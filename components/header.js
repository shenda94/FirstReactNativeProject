import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}> My Todo </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        height:80,
        paddingTop: 0,
        marginTop: 0,
        backgroundColor: 'coral'
    },
    title: {
        textAlign:'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
