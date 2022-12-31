import './App.css';
import data from './data';
import Chronicle from './Chronicle';
import Nav from './Nav';

function App() {
  let journals = data.map((journal) => {
    return <Chronicle key={journal.id} journal={journal} />;
  });

  return (
    <div className="App">
      <h1>Testing</h1>
      <Nav />
      {journals}
    </div>
  );
}

export default App;
