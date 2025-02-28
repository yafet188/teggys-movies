import './css/App.css'
import Favourite from './pages/Favourites';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourite />}/>
      </Routes>
      </main>
    </MovieProvider>
  );
} 

export default App;
