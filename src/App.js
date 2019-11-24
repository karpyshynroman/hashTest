import React from 'react';
import './App.css';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import {Route, Link, Switch, withRouter} from 'react-router-dom'


class App extends React.Component {
    state = {
        path : ''
    };

    setPathName = (event) => {
      this.setState({
         path: event.target.innerText
      });
    };

    render() {
        console.log(this.props);
        return (
            <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact}/>
                        <Route path='/project' component={Project}/>
                    </Switch>
                    <Link to="/contact">
                        {!this.state.path.includes('contact') &&
                        <button onClick={this.setPathName}>click go to contact</button>
                        }
                    </Link>
                    <Link to="/project">
                        {!this.state.path.includes('project') &&
                        <button onClick={this.setPathName}>click go to project</button>
                        }
                    </Link>
            </div>
        );
    }
}

export default withRouter(App);
