import styles from './searchFilesd.module.scss';
import { Search } from 'lucide-react';

const SearchField = ({ ...props }) => {
	return (
		<div className={styles.wrapper}>
			<input type='search' {...props} className={styles.input} />
			<Search className={styles.icon} />
		</div>
	);
};

export default SearchField;
