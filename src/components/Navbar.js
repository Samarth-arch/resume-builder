import React from 'react'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  return (
    <div>
      <nav className="bg-black p-3.5 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://media.istockphoto.com/id/1048168090/vector/talking-pencil.jpg?s=612x612&w=0&k=20&c=koqM-jCUHpNlQkn3PjEZX-9ki2FQzamvRQaL4LNvgOE=" alt="Logo" to="/" className="h-8 w-8 mr-4" />
          <Link to="/" className="text-white font-semibold text-lg">Resume_Builder</Link>
        </div>
        <ul className="flex space-x-4">
          <li className='text-white'>
            <Link to="/" className={`nav-link ${location.pathname}==="/? "active":""`}  >Home</Link>
            </li>
          <li className='text-white'><Link to="/CreateResume" className={`nav-link ${location.pathname}==="/CreateResume? "active":""`}  >Create-Resume</Link></li>
          <li className='text-white'><Link to="/Templates" className={`nav-link ${location.pathname}==="/Templates? "active":""`}  >Templates</Link></li>
        </ul>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/">Resume_Builder</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className={` text-nav-link ${location.pathname}==="/? "active":""`} to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`text-white nav-link ${location.pathname}==="/CreateResume? "active":""`} to="/CreateResume">Create-Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname}==="/Templates? "active":""`} to="/Templates">Templates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname}==="/Templates? "active":""`} to="/Templates">Examples</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
    </div>
  )
}

export default Navbar
