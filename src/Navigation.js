import React from 'react'
import {Link} from 'react-router-dom'

function Navigation(){
    const navStyle = {
        color: "white"
    }
    return(
        <nav>
            <h4>LOGO</h4>
            <ul className="nav-links">
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

 export default Navigation