import React from 'react'
import Navigation from './components/Navigation'
import About from "./components/About"
import Shop from "./components/Shop"
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
