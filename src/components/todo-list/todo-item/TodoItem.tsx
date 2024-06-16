import { FC } from 'react';
import { INotes } from '../../../types/types';
import styles from './TodoItem.module.scss';
import { Trash2 } from 'lucide-react';

interface ToDoProps {
	note: INotes;
	remove: (note: INotes) => void;
}

const TodoItem: FC<ToDoProps> = ({ note, remove }) => {
	return (
		<details className={styles.wrapper}>
			<summary className={styles.summary}>
				{note.title}
				<Trash2 className={styles.trash} onClick={() => remove(note)} />
			</summary>
			<p>{note.description}</p>
		</details>
	);
};

export default TodoItem;
