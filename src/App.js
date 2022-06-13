import "./styles.css";
import {Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './pages/Login'
import RequiredAuth from '/hoc/RequiredAuth'
import { Navbar } from "./components/Navbar";


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}></Route>
        <Route path="/login" element ={<login/>}></Route>
      </Routes>
    </div>
  );
}
