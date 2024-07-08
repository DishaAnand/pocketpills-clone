import SignIn from './components/SignIn';
import News from './components/News';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppLayout}>
      <SignIn />
      <News />
    </div>
  )
}

export default App
