import Sidebar from '../components/sidebar';
import styles from './AppLayout.module.css';

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}
