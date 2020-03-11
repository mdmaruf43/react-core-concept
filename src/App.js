import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Manna', 'Jashim', 'Salman', 'Sakib', 'Shuvo', 'Bapi']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  const fridends = [
    {name: "Sakib", age: 22},
    {name: "Upoma", age: 24},
    {name: "Pervez", age: 22}
  ]

  const productNames = products.map(product => product.name);
  console.log(productNames);
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am ....</p>
        <Counter></Counter>
        <Users></Users>
        <h2>Nayok Names</h2>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <h2>Friends Portion</h2>
        <ol>
          {
            fridends.map(fl => <li>{fl.name}</li>)
          }
        </ol>
        {
          fridends.map(fl => <Friend friendList={fl}></Friend>)
        }
        <Person name="Maruf" job="Student"></Person>
        <Person name="Sakib" job="Ast. Manager"></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    margin: '10px',
    float:'left'
  }
const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Friend(props){
  const friendStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    margin: '10px',
    float:'left'
  }
  const {name, age} = props.friendList;
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <h5>Age: {age}</h5>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border: '2px solid yellow', width: '400px', margin: '15px'}}>
      <h2>Name: {props.name}</h2>
      <h3>Profession: {props.job}</h3>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(ul => <li>{ul.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
