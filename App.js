import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button ,TextInput,ScrollView , FlatList ,TouchableOpacity} from 'react-native';
import Header from './Components/Header';

export default function App() {
  const [todos ,setTodos]=useState([
    {text:'buy coffe', key : 1},
    {text:'buy milk', key : 2},
    {text:'buy a car', key : 3},
  ])


  
  return (
    <View style={styles.container}>
      {/*header*/}
      <Header/>
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
             data={todos}
             renderItem={({item})=>(
               <Text>{item.text}</Text>
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
