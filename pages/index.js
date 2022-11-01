import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <a href="/e-commerce">Ecommerce</a>
      </div>
      <div>
        <a href="/web-development"> Web Development Notes </a>
      </div>
      <div>
        <a href="/reusable-components">Reusable Components</a>
      </div>
    </div>
  );
}
