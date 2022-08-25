import { Text, View, ScrollView, Image, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text>Some Text</Text>
          <View>
            <Text>Some More text</Text>
            <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
            style={{width:100,height:100}}></Image>
            <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat1.png',}}
            style={{width:100,height:100}}></Image>
          </View>
          <TextInput style={{height: 40,
          borderColor: 'gray',
          borderWidth: 1}}
          defaultValue="You can type in me">

          </TextInput>
        </ScrollView>
      </View>
    )
  }
}