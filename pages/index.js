import styles from "../styles/Home.module.css";
import Todo from "../components/Todo";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <Todo />
    </div>
  );
}
