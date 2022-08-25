import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
//import { Icon } from 'react-native-elements'
//import { MaterialIcons } from "@expo/vector-icons"
//import Icon from 'react-native-vector-icons/FontAwesome';

export default function todoitem({item, presshandler}) {
  return (
    <TouchableOpacity>
    
      <Text style={styles.items} onPress={() => presshandler(item.key)}>{item.text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    items:{
        padding:16,
        marginTop:16,
        borderColor:'#d6d6d6',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    }
})