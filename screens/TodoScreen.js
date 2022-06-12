import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native'
import Tasks from '../components/Task'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const [isUpdating, setIsUpdating] = useState(false)
  const [indexBeingUpdated, setIndexBeingUpdated] = useState()

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])
      setTask(null)
    } else {
      return
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  const editTask = () => {
    let updatedTasksItems = taskItems
    updatedTasksItems[indexBeingUpdated] = task
    setTaskItems(updatedTasksItems)
    setIsUpdating(false)
    setTask(null)
  }

  const handleEditTask = (index) => {
    setIndexBeingUpdated(index)
    setIsUpdating(true)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>What to do today?</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleEditTask(index)}
                >
                  <Tasks completeTask={() => completeTask(index)} text={item} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {!isUpdating && (
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Write a task...'}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
      {isUpdating && (
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.editInput}
            placeholder={'Edit your task'}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => editTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Edit</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  editInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 80,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
})
