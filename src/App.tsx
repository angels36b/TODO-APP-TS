import { useState } from 'react'
import { Todos } from './assets/components/Todos'

const mockTodos = [
  {
    id: 1,
    title: 'Aprender React',
    completed: false
  },

  {
    id: 2,
    title: 'Aprender patrones de diseño',
    completed: false
  },

  {
    id: 3,
    title: 'Aprender testing',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <div className="todoapp">

    <Todos todos={todos} />
    </div>
  )
}

export default App
