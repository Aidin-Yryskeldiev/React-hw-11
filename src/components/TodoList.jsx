import { useState } from "react";
import { useTodoList } from "./TodoListProvider";
import TodoItem from "./TodoItem";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import styled from "styled-components";

const TodoList = () => {
	const { state, dispatch } = useTodoList();
	const [inputValue, setInputValue] = useState("");

	const handleAddTodo = () => {
		if (inputValue.trim() !== "") {
			dispatch({
				type: "ADD_TODO",
				payload: {
					id: Math.random().toString(36).substr(2, 9),
					text: inputValue,
					completed: false,
				},
			});
			setInputValue("");
		}
	};

	const handleToggleTodo = (id) => {
		dispatch({
			type: "TOGGLE_TODO",
			payload: id,
		});
	};

	const handleRemoveTodo = (id) => {
		dispatch({
			type: "REMOVE_TODO",
			payload: id,
		});
	};

	const handleConfirmRemoveTodo = () => {
		dispatch({
			type: "CONFIRM_REMOVE_TODO",
			payload: state.todoToDelete,
		});
	};

	const handleCancelRemoveTodo = () => {
		dispatch({
			type: "CANCEL_REMOVE_TODO",
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleAddTodo();
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<FlexBox>
					<StyleInput
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Enter a new todo"
					/>
					<StyledButton type="submit">Добавить</StyledButton>
				</FlexBox>
			</form>
			<p>
				{state.todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggle={handleToggleTodo}
						onRemove={handleRemoveTodo}
					/>
				))}
			</p>
			<DeleteConfirmationModal
				isOpen={state.isDeleteModalOpen}
				onConfirm={handleConfirmRemoveTodo}
				onCancel={handleCancelRemoveTodo}
			/>
		</div>
	);
};

export default TodoList;

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
`;

const StyleInput = styled.input`
	width: 300px;
	height: 35px;
	border-color: blue;
	margin-top: 20px;
	padding-left: 5px;
`;

const StyledButton = styled.button`
	width: 130px;
	height: 35px;
	color: white;
	background-color: blue;
	cursor: pointer;
	margin-top: 20px;
	font-size: 20px;
	border-color: blue;
	&:hover {
		background-color: #0000d8;
	}
`;
