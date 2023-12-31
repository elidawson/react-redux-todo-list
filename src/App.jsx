import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { Toast } from './Toast';
import './App.css';

const App = () => {
	return (
		<div>
			<Toast />
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
