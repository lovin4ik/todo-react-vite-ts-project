import { Dispatch, FC, SetStateAction } from 'react';
import styles from './TodoForm.module.scss';
import { IInputs } from '../../types/types';

interface TodoProps {
	inputs: IInputs;
	setInputs: null | Dispatch<SetStateAction<string>>;
	createNote: () => void;
}

const TodoForm: FC<TodoProps> = ({ inputs, setInputs, createNote }) => {
	return (
		<form className={styles.form}>
			<input
				type='text'
				placeholder='Title'
				className={styles.inp}
				required
				value={inputs.title}
				onChange={(e): string =>
					setInputs({ ...inputs, title: e.target.value })
				}
			/>
			<input
				type='text'
				placeholder='Description'
				className={styles.inp}
				value={inputs.description}
				onChange={(e): string =>
					setInputs({ ...inputs, description: e.target.value })
				}
			/>
			<button
				onClick={(e) => {
					createNote();
					e.preventDefault();
				}}
				className={styles.btn}
			>
				Create ToDo
			</button>
		</form>
	);
};

export default TodoForm;
