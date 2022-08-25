import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { useState } from 'react'
import Header from './header'
import Todoitem from './todoitem'
import Addtodo from './addTodo'

export default class home2 extends Component {
    constructor(props) {
        super(props);
      };

      deleteItem = (id) => {

        this.setState({
            sampleData : this.state.sampleData.filter(item => item.key !== id)
        })
     
     }

      state = {
        sampleData : [
            {
                key:1,
              name: 'rena',
              email: 'karl.johnson@example.com',
              picture: {
                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
              },
            },
            {
                key:2,
              name: 'gomez',
              email: 'asuncion.gomez@example.com',
              picture: {
                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
              },
              nat: 'ES',
            },
            {
                key:3,
              name: 'ribero',
              email: 'gilcenira.ribeiro@example.com',
              picture: {
                thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
              },
            },]
    
      }
      
    /*const [todos, setTodos] = useState([
        {text: "buy a coffea", key:"1"},
        {text: "making a app", key:"2"},
        {text: "playing in the beach", key:"3"},
      ]);*/

      removeCharacter = (index) => {
        const { sampleData } = this.state
      
        this.setState({
            sampleData: sampleData.filter((character, i) => {
            return i !== index
          }),
        })
      }
    
  presshandler = key => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.key!=key)
        });
      }


  render() {
    return (
        <View style={styles.container}>
        <Header />
        <View style={styles.content}>
  
        
        <Addtodo />
  
            <View style={styles.list}>
              <FlatList
                data={this.state.sampleData} renderItem={({item}) => (
                  <Todoitem item={item} presshandler={this.deleteItem} />
              )} />
            </View>
  
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      content: {
        padding:30
      },
      list: {
        marginTop: 20
      }
})