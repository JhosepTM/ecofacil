import '../styles/App.css';
import Header from '../components/sections/Header'
import Banner from './sections/Banner';
import SuggestionsUsers from './pages/SuggestionsUsers';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Exams from './pages/Exams';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/examenes-pasados' element={<Exams />}></Route>
        <Route path='/contenido' element={<Content />}></Route>
        <Route path='/sugerencias' element={<SuggestionsUsers />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
        <Route path="/" element={<Banner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
