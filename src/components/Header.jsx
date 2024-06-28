import { useTodoList } from "./TodoListProvider";
import styled from "styled-components";

const Header = () => {
	const { state } = useTodoList();
	const { todos } = state;

	const completedTasksCount = todos.filter((todo) => todo.completed).length;
	const uncompletedTasksCount = todos.filter((todo) => !todo.completed).length;
	const totalCount = todos.length;

	return (
		<header>
			<TextTodo>TodoList</TextTodo>
			<Border>
				<FlexBox>
					<TextSecond>
						Всего: <TextSpan>{totalCount}</TextSpan>
					</TextSecond>
					<TextFirst>
						Выполненно: <TextSpan>{completedTasksCount}</TextSpan>
					</TextFirst>
					<TextThird>
						Невыполнено: <TextSpan>{uncompletedTasksCount}</TextSpan>
					</TextThird>
				</FlexBox>
			</Border>
		</header>
	);
};

export default Header;

const Border = styled.div`
	width: 50%;
	height: 50px;
	background-color: white;
	border-radius: 20px;
	margin: 0 auto;
	margin-top: 100px;
	padding-top: 10px;
`;

const TextTodo = styled.h1`
	animation: Text 0.5s infinite;
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	position: relative;
	top: 50px;
	font-size: 60px;
	@keyframes Text {
		0%,
		100% {
			color: blue;
		}
		50% {
			color: red;
		}
	}
`;

const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 100px;
`;

const TextFirst = styled.p`
	font-size: 25px;
	font-family: Arial, Helvetica, sans-serif;
	color: #00ff00;
`;

const TextSecond = styled.p`
	font-size: 25px;
	font-family: Arial, Helvetica, sans-serif;
	color: blue;
`;

const TextThird = styled.p`
	font-size: 25px;
	font-family: Arial, Helvetica, sans-serif;
	color: red;
`;

const TextSpan = styled.span`
	color: black;
`;
