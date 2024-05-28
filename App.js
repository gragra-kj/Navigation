
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomScreen from './screens/HomScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack= createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomScreen} options={{
          title:"A little bit oxygen",
          headerStyle:{
            backgroundColor:"grey",
          },
          headerTintColor:"#fff",
          headerTitleStyle:{fontWeight:"bold"},
          headerRight:()=>(
            <Pressable onPress={()=>alert("Menu pressed")}>
              <Text style={{color:"#fff",fontSize:16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle:{
            backgroundColor:"#e8e4f3"
          }
        }}/> 
        <Stack.Screen name='About' component={AboutScreen} initialParams={{
          name:"Katee"
        }} options={({route})=>({
          title:route.params.name

        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}