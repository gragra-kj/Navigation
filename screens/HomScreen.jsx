//use of navigation prop
// import { StyleSheet, Text, View,Button } from 'react-native'
// import { useNavigation } from '@react-navigation/native'

// export default function HomScreen({navigation}) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//       <Button title='Go to about' onPress={()=>navigation.navigate("About")}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:"center",
//         justifyContent:"center"
//     },
//     text:{
//         fontSize:24,
//         fontWeight:"bold",
//         marginBottom:16
//     }
// })



//use navigation hook
import { StyleSheet, Text, View,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomScreen({route}) {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button title='Go to about' onPress={()=>navigation.navigate("About")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16
    }
})