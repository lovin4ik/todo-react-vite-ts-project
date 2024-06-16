import { FC } from 'react';
import { INotes } from '../../types/types';
import styles from './TodoList.module.scss';
import TodoItem from './todo-item/TodoItem';

interface ListProps {
	notes: INotes[];
	remove: () => void;
}

const TodoList: FC<ListProps> = ({ notes, remove }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>ToDo's</h1>
			<div className={styles.todos}>
				{notes.length
					? notes.map((note) => (
							<TodoItem key={note.id} note={note} remove={remove} />
					  ))
					: 'ToDo not found'}
			</div>
		</div>
	);
};

export default TodoList;
