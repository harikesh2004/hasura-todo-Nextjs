// app/page.js
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { ApolloWrapper } from '../lib/apolloClient';
import styles from './page.module.css';

export default function TodoPage() {
  return (
    <ApolloWrapper>
      <div className={styles.container}>
        <h1 className={styles.title}>Todo Application</h1>
        <AddTodo />
        <TodoList />
      </div>
    </ApolloWrapper>
  );
}
