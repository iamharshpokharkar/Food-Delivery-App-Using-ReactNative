import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LoginScreen from './src/assets/screens/LoginScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {

  return (
    <View>
      
      <LoginScreen/>
      <StatusBar  barStyle="light-content" />

    </View>
  )
}

export default App