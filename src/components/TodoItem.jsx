import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleComplete({ id: id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }))
	}

	return (
		<li>
			
			<div>

				<span>

					<input
						type="checkbox"
						checked={completed}
						onChange={handleCompleteClick}
					></input>

					{title}
				
				</span>
				
				<button onClick={handleDeleteClick}>Delete</button>
			
			</div>
		
		</li>
	);
};

export default TodoItem;
