import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
