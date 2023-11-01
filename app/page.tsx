import './page.module.css'
import styles from './page.module.css'
export default function Square() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.square}>X</button>
            <button className={styles.square}>X</button>
            <button className={styles.square}>X</button>
            <button className={styles.square}>X</button>
            <button className={styles.square}>X</button>
            <button className={styles.square}>X</button>
            <button className={styles.square}>X</button>
        </div>);
}
