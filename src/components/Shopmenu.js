import React from 'react'
import {Link} from 'react-router-dom'

function Shopmenu(){
    return(
        <div>
            <h4>List of shops are</h4>
            <ul>
                <Link to="/shop/shop1">
                    <li>Shop1</li>
                </Link>
                <Link to="/shop/shop2">
                    <li>Shop2</li>
                </Link>
                <Link to="/shop/shop3">
                    <li>Shop3</li>
                </Link>
            </ul>
        </div>
        )
}

export default Shopmenu