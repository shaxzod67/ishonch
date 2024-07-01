import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './companents/Header/header';
import { Natija } from './companents/Natija/natija';
import { Signup } from './companents/Kirish/signUp';
import { Login } from './companents/Kirish/signIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/natija" element={<Natija />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;



