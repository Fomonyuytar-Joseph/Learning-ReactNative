import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button ,TextInput,ScrollView , FlatList ,TouchableOpacity} from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';

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
  setTodos((prevTodos)=>{
    return [{text:text , key:Math.random().toString()} , ...prevTodos]
  })

}
    

  
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20,
  }
  
  
});
