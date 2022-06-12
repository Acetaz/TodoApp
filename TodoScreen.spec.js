import TodoScreen from './screens/TodoScreen'
import { fireEvent, render } from '@testing-library/react-native'

describe('TodoScreen', () => {
  it('adds task to tasksItems', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <TodoScreen />
    )

    const button = getByText('Add')
    const textInput = getByPlaceholderText('Write a task')

    const createdText = 'first todo'

    fireEvent.changeText(textInput, createdText)
    fireEvent.press(button)

    const createdItem = getByText(createdText)

    expect(createdItem).not.toBeNull()
  })
  it('adds multiple tasks to tasksItems', () => {
    const { getByText, getByPlaceholderText } = render(<TodoScreen />)

    const button = getByText('Add')
    const textInput = getByPlaceholderText('Write a task')

    const createdText1 = 'first todo'
    const createdText2 = 'second todo'

    fireEvent.changeText(textInput, createdText1)
    fireEvent.press(button)
    fireEvent.changeText(textInput, createdText2)
    fireEvent.press(button)

    const createdItem1 = getByText(createdText1)
    const createdItem2 = getByText(createdText2)

    expect(createdItem1).not.toBeNull()
    expect(createdItem2).not.toBeNull()
  })
  it('delete task from tasksItems', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <TodoScreen />
    )

    const button = getByText('Add')
    const textInput = getByPlaceholderText('Write a task')

    const createdText = 'first todo'

    fireEvent.changeText(textInput, createdText)
    fireEvent.press(button)

    const deleteItemButton = getByText('Done')

    fireEvent.press(deleteItemButton)

    const deletedItem = queryByText(createdText)

    expect(deletedItem).toBeNull()
  })
})
