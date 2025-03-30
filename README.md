## Redux Toolkit Todo App

### 1. Install Redux Toolkit & React Redux
Install the required packages:
```sh
npm install @reduxjs/toolkit react-redux
```

---
### 2. Create the Redux Store
📄 **store.js**
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: { todo: todoReducer } // Add key for reducer
});
```

---
### 3. Create a Slice for Todos
📄 **todoSlice.js**
```javascript
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, text: 'Hello world!' }
    ]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

// Export actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
```

---
### 4. Provide Store to React App
📄 **index.js (or main.jsx in Vite)**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';  // Import store
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

---
### 5. Use Redux in Components
📄 **TodoList.jsx**
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../features/todo/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos); // Access todos from store
    const dispatch = useDispatch(); // Get dispatch function

    const handleAddTodo = () => {
        const text = prompt('Enter a new todo:');
        if (text) {
            dispatch(addTodo(text)); // Dispatch addTodo action
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} 
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
```

---
### 6. Use TodoList in App.js
📄 **App.js**
```javascript
import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div>
            <h1>Redux Toolkit Todo App</h1>
            <TodoList />
        </div>
    );
};

export default App;
```

---
### 📂 Final Directory Structure
```
src/
 ├── app/
 │   ├── store.js
 ├── features/
 │   ├── todo/
 │   │   ├── todoSlice.js
 ├── components/
 │   ├── TodoList.jsx
 ├── App.js
 ├── index.js
```

---
### 🎯 Summary
✅ Install Redux Toolkit & React-Redux: `npm install @reduxjs/toolkit react-redux`.
✅ Create a Store (`store.js`) and configure the reducer.
✅ Create a Slice (`todoSlice.js`) to manage state & actions.
✅ Provide the Store in `index.js` using `<Provider>`.
✅ Use Redux in Components (`useSelector` to read, `useDispatch` to modify state).
✅ Render the `TodoList` in `App.js`.

🚀 Now your React app has Redux Toolkit fully integrated!
