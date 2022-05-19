import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button ,TextInput,ScrollView , FlatList ,TouchableOpacity ,Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';
// import Sanbox from './Components/Sanbox';

export default function App() {
  const [todos ,setTodos]=useState([
    {text:'buy coffe', key : 1},
    {text:'buy milk', key : 2},
    {text:'buy a car', key : 3},
  ])
const pressHandler= (key)=>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todo => todo.key !=  key);
  })

}

const submitHandler=(text)=>{
  if(text.length > 3){
    setTodos((prevTodos)=>{
      return [{text:text , key:Math.random().toString()} , ...prevTodos]
    })
  }
  else{
    Alert.alert('OOPS','Todo must be adbove 3 characters long',[
      {text:'Understood',onPress:()=> console.log('alert closed')}
    ])
  }
 
}
    

  
  return (
    //Sandox
    // <Sanbox/>
     <TouchableWithoutFeedback //onPress={()=>{
    //   Keyboard.dismiss()
    //   console.log('dismisses keyboard'
    //   )
    // }}
      >
    <View style={styles.container}>
      {/*header*/}
      <Header/>
      <View style={styles.content}>
        {/* to do form */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
             data={todos}
             renderItem={({item})=>(
              <TodoItem item={ item } pressHandler={pressHandler}/>
             )}
          
          />

        </View>

      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  content:{
    flex: 1,
    padding: 40,
    backgroundColor:'blue'
  },
  list:{
    flex: 1,
    marginTop: 20,
  }
  
  
});
