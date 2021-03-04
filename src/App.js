import logo from './Beholi.jpeg';
import './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Beholi and i'm going to master React!
        </p>
        <a
          className="App-link"
          href= "https://github.com/Benenge97"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
