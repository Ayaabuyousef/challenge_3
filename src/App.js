import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component {
  constructor(){
    super();
  }
  handleClickName(event) {
    var name=event.target.value; 
    this.setState(state => ({name}));
  }
  handleClickEmail(event) {
    var email=event.target.value; 
    this.setState(state => ({email}));
  }
  handleClickPassword(event){
    var Password=event.target.value; 
    this.setState(state => ({Password}));
  }
  render(){
  return (
    <div className="App">
      <form>
        {/* handledefault(e){
        e.preventDefault();
            } */}
            <div>
                <input type='text'onChange= {this.handleClickName}></input>
            </div>
            <div>
                <input type='text'onChange= {this.handleClickEmail}></input>
            </div>
            <div>
                <input type='text'onChange= {this.handleClickPassword}></input>
            </div>
            <button type="submit">NEXT</button>
      </form>
    </div>
  );
}
}
export default App;
