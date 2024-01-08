import { useState } from 'react'
import { Todos } from './assets/components/Todos'
import { type TodoId } from './assets/types'

const mockTodos = [
  {
    id: '1',
    title: 'Aprender React',
    completed: false
  },

  {
    id: '2',
    title: 'Aprender patrones de diseño',
    completed: false
  },

  {
    id: '3',
    title: 'Aprender testing',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">

      <Todos
        onRemoveTodo={handleRemove}
        todos={todos} />
    </div>
  )
}

export default App
