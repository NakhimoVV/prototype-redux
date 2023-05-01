import { legacy_createStore as createStore } from 'redux'
import { taskReducer } from './taskReducer'

const initialState = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
]

//1 Способ:
// export const store = createStore(taskReducer, initialState)

//2 Способ:
export function initiateStore() {
    return createStore(taskReducer, initialState)
}
