import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import FrontPage from './components/FrontPage/FrontPage';

const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={FrontPage} exact />
                <Route path="/home" component={Home} exact />
                <Route path="/auth" component={Auth} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;