import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

export default function addTodo({submitHandler}) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    //alert(val);
    setText(val);
  }


  return (
    <View>
    <Text>Tambah Agenda</Text>
    <TextInput style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1}}
        placeholder="You can type in me"
        onChangeText={(val) => changeHandler(val)}
        ></TextInput>

        <Button
          title="Tambah Agenda"
          color="#841584"
          onPress={() => submitHandler(text)}
          accessibilityLabel="Learn more about this purple button"
        />
  </View>
  )
}

const styles = StyleSheet.create({})