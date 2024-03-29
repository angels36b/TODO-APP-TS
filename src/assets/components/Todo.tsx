// se crea componente Todo.tsx
import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={() => { }} />

            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                  onRemoveTodo({ id })
                }}
            />
        </div>
  )
}
