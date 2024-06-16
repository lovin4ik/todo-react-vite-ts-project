import { FC } from 'react';
import styles from './styles/app.module.scss';
import './styles/reset.css';
import Todo from './layout/todo/Todo';

const App: FC = () => {
	return (
		<div className={styles.app}>
			<Todo />
		</div>
	);
};

export default App;
