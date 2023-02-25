import logo from './logo.svg';
import './App.css';
import Form from './Form'; 
import RequestClientId from './requestClientID';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <RequestClientId />
      </header>
    </div>
  );
}

export default App;
