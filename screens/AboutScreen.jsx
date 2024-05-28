import { StyleSheet, Text, View,Button } from 'react-native';
import { useLayoutEffect } from 'react';


export default function AboutScreen({route,navigation}) {
    const {name}=route.params;

    useLayoutEffect(()=>{
      navigation.setOptions({
        title:name
      })
    },[navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title='Go to Home' onPress={()=>navigation.setParams({
        name:"Muthui"
      })}/>
      <Button title='Go back with data' onPress={()=>navigation.navigate("Home",{
        result:"Cant even Breath",
        name:"Grace"
      })}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16
    }
})