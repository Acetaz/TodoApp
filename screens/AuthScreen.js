import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function AuthScreen({ onAuthenticate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Welcome to the Todo App!</Text>
      <Text>Before you can start please login </Text>
      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginVertical: 10,
  },
})
