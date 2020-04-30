import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* ----------Using Class ------------
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));
*/

/* ---------Using Funtion--------------
function ReactExample()  {
  
  return <h2>Hi, I am a Happy!</h2>;
}
ReactDOM.render(<ReactExample></ReactExample>, document.getElementById('root'))
*/
//const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
/*
const myelement1 = (
  /*<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  <div>
  <h1>I am a Happy </h1>
  <h1>I am a Happy too </h1>
</div>
);
const myelement = <input type="text" />;

ReactDOM.render(myelement, document.getElementById('root'));

//ReactDOM.render(myelement1, document.getElementById('root'));
*/
/*------------Props----------------
class People extends React.Component {
  render() {
    return <h2>People who want to be {this.props.brand}!</h2>;
  }
}

class House extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in House?</h1>
      <Car brand="Safe" />
      </div>
    );
  }
}

ReactDOM.render(<House />, document.getElementById('root'));
*/
/*---------React Events--------------------
class Home extends React.Component {
  safe(a) {
    alert("Great . You are safe !");
    alert(a)
  }
  render() {
    return (
      <button onClick={this.safe.bind(this, "Free")}>Stay at Home !</button>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
*/

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'male'};
    this.state = {
      username: '',
      age: null,
      gender:'',
      errormessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
   handleSubmit(event) {
    alert('Your Gender is : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <h1> Form </h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      <label>
      <p>Select your Gender</p>
      <select value={this.state.gender} onChange={this.handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      </label>
      <p> </p>
      <input type="submit" value="Submit" />
      </form>
    );
    
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'))