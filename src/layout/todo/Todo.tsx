import TodoForm from '../../components/todo-form/TodoForm';
import TodoList from '../../components/todo-list/TodoList';
import styles from './Todo.module.scss';
import SearchField from '../../ui/searchField/searchField';
import { useMemo, useState } from 'react';
import { INotes } from '../../types/types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Todo = () => {
	const [todos, setTodos] = useLocalStorage('todos', []);
	const [inputs, setInputs] = useState({ title: '', description: '' });
	const [search, setSearch] = useState('');

	const searchToDo = useMemo(() => {
		return todos.filter((note: INotes) =>
			note.title.toLowerCase().includes(search)
		);
	}, [search, todos]);

	const createToDo = () => {
		if (inputs.title !== '') {
			setTodos([...todos, { ...inputs, id: todos.length + 1 }]);
			setInputs({ title: '', description: '' });
		}
	};

	const removeToDo = (note: INotes) => {
		setTodos(todos.filter((p: INotes) => p.id !== note.id));
	};

	return (
		<div className={styles.wrapper}>
			<TodoForm inputs={inputs} setInputs={setInputs} createNote={createToDo} />
			<SearchField
				placeholder='Search'
				value={search}
				onChange={(e: any) => {
					setSearch(e.target.value);
				}}
			/>
			<TodoList notes={searchToDo} remove={removeToDo} />
		</div>
	);
};

export default Todo;
