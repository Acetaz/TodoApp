import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'

import AuthScreen from './screens/AuthScreen'
import TodoScreen from './screens/TodoScreen'

export default function App() {
  const [biometrics, setBiometrics] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if hardware supports biometrics

  const onAuthenticate = async () => {
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    }).then((result) => {
      setIsAuthenticated(result.success)
    })
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <TodoScreen />
      ) : (
        <AuthScreen onAuthenticate={onAuthenticate} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
