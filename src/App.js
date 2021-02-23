//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const books=[
    {name:'Harry Potter',price:'$40.50'},
    {name:'Lovely Bones',price:'$30.20'},
    {name:'Dark Places',price:'$33.70'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          books.map(boi=><li>{boi.name}</li>)
          }
          
        </ul>
        {
          books.map(boi=><Book book={boi}></Book>)
        }
      </header>
    </div>
  );
}
function Book(props){
  const bookStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightsalmon',
    color:'green',
    margin:'10px',
    height:'200px',
    width:'400px'
  }
  return (
     <div style={bookStyle}>
        <h1>Name: {props.book.name}</h1>
        <p>Price: {props.book.price}</p>
        <button>Buy Now</button>
     </div>
  );
}
function Counter(){
  const [count, setCount]=useState(10);
  // const handleIncrease=()=>setCount(count+1);

  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
       <h3>dynamic users:{users.length}</h3>
       <ul>
         {
           users.map(user=> <li>{user.name}</li>)
         }
       </ul>
    </div>
  )
}

export default App;
