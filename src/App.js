// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateResume from './components/CreateResume';
import Templates from './components/Templates';
// import ReactDOM from "react-dom/client";


function App() {
  return (
    <>
      {/* <Router> */}
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CreateResume" element={<CreateResume />} />
            <Route exact path="/Templates" element={<Templates />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* </Router> */}
    </>

  );
}

export default App;
