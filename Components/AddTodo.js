import React from 'react'
import { StyleSheet, Text, View ,Button ,TextInput,ScrollView , FlatList ,TouchableOpacity} from 'react-native';
import { useState } from 'react';

function AddTodo({submitHandler}) {
    const[text ,setText]=useState('')

    const changeHandler = (val)=>{
        setText(val)

    }
  return (
      <View>
          <TextInput
          style={styles.input}
          placeholder='Add a New Todo'
          onChangeText={changeHandler}

          />
          <Button onPress={()=> submitHandler(text)} title='add  Todo' color='coral'/>
      </View>
    
  )
}
const styles =StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:2,
        borderBottomColor:'#ddd'


    }
})

export default AddTodo