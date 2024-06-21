import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="todo-app">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Todo List</h1> */}
      <TodoList/>
    </div>
  );
}

export default App;
