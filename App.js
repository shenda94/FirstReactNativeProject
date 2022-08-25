import { StyleSheet, Text, View, FlatList, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { StatusBar } from 'react-native'
import { useState } from 'react'
import React from 'react'
import Header from './components/header'
import Todoitem from './components/todoitem'
import Addtodo from './components/addTodo'

export default function App() {
  //data objeck sampel
  const [todos, setTodos] = useState([
    {text: "buy a coffea", key:"1"},
    {text: "making a app", key:"2"},
    {text: "playing in the beach", key:"3"},
  ]);

  //const [text, setText] = useState('');

  const presshandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key!=key)
    });
  }

  const submitHandler = (text) => {
    //alert(text);
    //alert(text.length);

    if (text.length > 3) {

     // alert(text);
    
      setTodos(prevTodos => {
    
    return [
    {
    text: text,
            key: Math.floor(Math.random()),
    },
    ...prevTodos
    
    ]
    
    });
    
    
    }
    else {
      Alert.alert("Perhatian", "Harus lebih dari 3 karakter", [
        {text: "Mengerti", onPress: () => {}},
        {text: "OK", onPress: () => {}},
        ])
        
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
        <View style={styles.container}>
      <Header />
      <View style={styles.content}>

      <Addtodo submitHandler={submitHandler} />

          <View style={styles.list}>
          <FlatList
              data={todos} renderItem={({item}) => (
                <Todoitem item={item} presshandler={presshandler} />
            )} />
          </View>

      </View>
      
    </View>
    </TouchableWithoutFeedback>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  content: {
    flex:1,
    padding:30
  },
  list: {
    flex:1,
    marginTop: 20
  }
})

const addTodoo = () => {
  return (
    <View>
    <Text>addTodo</Text>
    <TextInput style={{height: 40,
        borderColor: 'gray',
        borderWidth: 1}}
        placeholder="You can type in me"
        ></TextInput>

        <Button
          title="Klik Aku"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
  </View>
)
}
