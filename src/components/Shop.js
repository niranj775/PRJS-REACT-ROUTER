import React from 'react'
import Shopmenu from './Shopmenu'
import Shop1 from './Shop1'
import Shop2 from './Shop2'
import Shop3 from './Shop3'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function Shop(){

    return(
        <Router>
            <div>
                <Shopmenu />
                <Switch>
                    <Route path="/shop/shop1" component={Shop1}/>
                    <Route path="/shop/shop2" component={Shop2}/>
                    <Route path="/shop/shop3" component={Shop3}/>
                </Switch>
            </div>
        </Router>
    )
}

 export default Shop