import styled from "styled-components";
const TodoItem = ({ todo, onToggle, onRemove }) => {
	return (
		<div>
			<FlexBox>
				<InputCheckbox
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggle(todo.id)}
				/>
				<Text
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
					{todo.text}
				</Text>
				<DeleteButton onClick={() => onRemove(todo.id)}>Удалить</DeleteButton>
			</FlexBox>
		</div>
	);
};

export default TodoItem;

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 150px;
	background-color: blue;
	width: 28%;
	height: 50px;
	margin: 0 auto;
	margin-top: 20px;
`;

const DeleteButton = styled.button`
	width: 130px;
	height: 30px;
	color: white;
	background-color: red;
	border-radius: 20px;
	border: none;
	margin-top: 10px;
	position: relative;
	right: 7px;
	cursor: pointer;
`;

const Text = styled.span`
	margin-top: 15px;
	margin-left: 20px;
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	font-size: 20px;
`;

const InputCheckbox = styled.input`
	transform: scale(2);
	margin-left: 10px;
	cursor: pointer;
`;
