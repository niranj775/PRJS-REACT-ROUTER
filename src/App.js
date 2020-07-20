import React from 'react'
import Navigation from './Navigation'
import About from "./About"
import Shop from "./Shop"
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
    render(){
        return(
            <Router>
                <div className="App">
                    <Navigation />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shop" component={Shop}/>
                    </Switch>
                </div>
              </Router>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home Page</h2>
    </div>
)

export default App;
