import requests from './requests';
import Row from './components/Row';
import './App.css'

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" id={1} request={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending" id={2} request={requests.fetchTrending} />
      <Row title="Top Rated" id={3} request={requests.fetchTopRated} />
      <Row title="Action" id={4} request={requests.fetchActionMovies} />
      <Row title="Comedy" id={5} request={requests.fetchComedyMovies} />
      <Row title="Horror" id={6} request={requests.fetchHorrorMovies} />
      <Row title="Romance" id={7} request={requests.fetchRomanceMovies} />
      <Row title="Documentaries" id={8} request={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
