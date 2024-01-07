// este archivo solo va tener las declaraciones de tipos
// se define la forma en que debe tener el objeto TODO
export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type ListOfTodos = Todo []
