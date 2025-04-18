import { formatDate } from "../../helpers/formatDate"
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>NEWS</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
            <p></p>
        </header>
    )
}

export default Header;