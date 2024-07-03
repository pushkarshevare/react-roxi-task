import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
          <div className="logo">
          Roxiler
          </div>
          <ul>
            <li>
                <Link to={'/'}>Home</Link>
                <Link to={'/pie'}>PieChart</Link>
                <Link to={'/bar'}>BarChart</Link>
            </li>
          </ul>
         
        </nav>
    </div>
  )
}

export default Navbar
