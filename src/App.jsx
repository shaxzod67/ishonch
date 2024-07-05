import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './companents/Header/header';
import { Natija } from './companents/Natija/natija';
import { Signup } from './companents/Kirish/signUp';
import { Login } from './companents/Kirish/signIn';
import { useContext } from 'react';
import { AuthContext } from './contex/AuthContext';
import Royhat from './companents/Royhat/Royhat';

function App() {
  const { currentUser } = useContext(AuthContext)
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signup" />
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/natija" element={<RequiredAuth><Natija /></RequiredAuth>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route element={<Royhat />} path="/royhat" />
      </Routes>
    </>
  );
}

export default App;



