import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  
  return (
    <div className='App'>
       <h1>Yetflix</h1>
       <Row title="Original" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
