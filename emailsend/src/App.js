import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/home';
function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
   </Routes></>
  );
}

export default App;
