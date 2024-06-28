import React from "react";
import { TodoListProvider } from "./components/TodoListProvider";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
	return (
		<TodoListProvider>
			<div>
				<Header />
				<TodoList />
			</div>
		</TodoListProvider>
	);
};

export default App;
