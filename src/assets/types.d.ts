// este archivo solo va tener las declaraciones de tipos
// se define la forma en que debe tener el objeto TODO
export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick <Todo, 'id'>
export type TodoTitle = Pick <Todo, 'title'>
export type TodoCompleted = Pick <Todo, 'completed'>
