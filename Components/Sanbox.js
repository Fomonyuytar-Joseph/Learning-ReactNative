import React from 'react'
import {Text, View , StyleSheet} from 'react-native'

function Sanbox() {
  return (
      
   <View style={styles.container}>
       <Text style={styles.boxOne}>one</Text>
       <Text style={styles.boxTwo}>two</Text>
       <Text style={styles.boxThree}>three</Text>
       <Text style={styles.boxFour}>Four</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:"center",
        paddingTop:40,
        backgroundColor:'#ddd'

    },
    boxOne:{
        flex: 5,
        backgroundColor:'violet',
        padding:10
    },
    boxTwo:{
        flex: 1,
        backgroundColor:'red',
        padding: 20
    },
    boxThree:{
        flex: 1,
        backgroundColor:'blue',
        padding: 30
    },
    boxFour:{
        flex: 1,
        backgroundColor:'gold',
        padding:40
    }

})

export default Sanbox