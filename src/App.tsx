import './App.css';
// @ts-ignore
import Header from './components/header.tsx';
// @ts-ignore
import Meme from './components/meme.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;