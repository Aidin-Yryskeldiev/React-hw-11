import { createContext, useContext, useReducer } from "react";

const TodoListContext = createContext();

const initialState = {
	todos: [],
	isDeleteModalOpen: false,
	todoToDelete: null,
};

const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case "TOGGLE_TODO":
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		case "REMOVE_TODO":
			return {
				...state,
				isDeleteModalOpen: true,
				todoToDelete: action.payload,
			};
		case "CONFIRM_REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
				isDeleteModalOpen: false,
				todoToDelete: null,
			};
		case "CANCEL_REMOVE_TODO":
			return {
				...state,
				isDeleteModalOpen: false,
				todoToDelete: null,
			};
		default:
			return state;
	}
};

export const TodoListProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	return (
		<TodoListContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoListContext.Provider>
	);
};

export const useTodoList = () => {
	const context = useContext(TodoListContext);
	if (!context) {
		throw new Error("useTodoList must be used within a TodoListProvider");
	}
	return context;
};

export default TodoListProvider;
