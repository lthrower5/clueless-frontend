import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './main/Home';


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Home/>
      </div>
    );
  }
}
export default App;
