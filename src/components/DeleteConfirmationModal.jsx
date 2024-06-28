import styled from "styled-components";

const DeleteConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
	return (
		isOpen && (
			<ModalContainer>
				<ModalContent>
					<Text>Вы действительно хотите удалить эту задачу?</Text>
					<ButtonYes onClick={onConfirm} primary>
						Да
					</ButtonYes>
					<ButtonNo onClick={onCancel}>Отмена</ButtonNo>
				</ModalContent>
			</ModalContainer>
		)
	);
};

export default DeleteConfirmationModal;

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background-color: white;
	padding: 40px;
	border-radius: 5px;
	text-align: center;
`;

const Text = styled.p`
	font-family: Arial, Helvetica, sans-serif;
`;

const ButtonYes = styled.button`
	margin: 0 10px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 20px;
	color: white;
	background-color: blue;
	&:hover {
		background-color: #0f0fd4;
	}
`;

const ButtonNo = styled.button`
	margin: 0 10px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 20px;
	color: white;
	background-color: red;
	&:hover {
		background-color: #df1010;
	}
`;
