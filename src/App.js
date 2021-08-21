import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Hostel from './components/Hostel';
import Booked from './components/Booked';
import Room from './components/Room';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/hostel" component={Hostel}></Route>
          <Route exact path="/booked" component={Booked}></Route>
          <Route exact path="/room" component={Room}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
