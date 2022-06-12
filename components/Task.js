import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'

const Task = ({ text, completeTask }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
      <Pressable style={styles.btn} onPress={completeTask}>
        <Text>Done</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
  },
  btn: {
    width: 80,
    height: 50,
    backgroundColor: '#D3D3D3',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
})

export default Task
