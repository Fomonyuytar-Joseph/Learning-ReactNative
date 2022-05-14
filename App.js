import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button ,TextInput,ScrollView } from 'react-native';

export default function App() {
  const [people , setPeople]=useState([
    {name:'Joseph' , key:'1'},
    {name:'Joe' , key:'2'},
    {name:'Max' , key:'3'},
    {name:'christy' , key:'4'},
    {name:'marion' , key:'5'},
    {name:'jame' , key:'6'},
    {name:'sole' , key:'7'},
    {name:'akrt' , key:'8'},
  ]);
  
  return (
    <View style={styles.container}>
      <ScrollView>
     {people.map((item)=>{
       return(
         <View key={item.key}>
           <Text style={styles.item}> {item.name}</Text>
         </View>

       )
      
     })}

      
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24
  }
  
});
