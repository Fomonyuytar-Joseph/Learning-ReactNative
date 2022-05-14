import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button ,TextInput} from 'react-native';

export default function App() {
  const [name , setName]=useState('Joseph');
  const [age , setAge]=useState(20);
  const ClickHandler=()=>{
    setPerson({name:'Joe',age:'12'});
  }
  return (
    <View style={styles.container}>
      <Text> Enter Name:</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g Joe Josep werwe' 
      onChangeText={(val)=>setName(val)}
      />

<Text> Enter Age:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g 19' 
      onChangeText={(val)=>setAge(val)}
      />

      <Text>My name is {name} and I am {age} old</Text>
      <View style={styles.buttonContainer}>
        <Button title='Change Name' onPress={ClickHandler}/>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:250,
    borderRadius:5

  }
});
