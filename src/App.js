import './App.css';
import './MyStyle.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function click(){
    setCount(count +1);
  }

  return (
    <div>
      <h1>welcome react</h1>
      <MyBtn count={count} onClick={click}/>
      <MyBtn count={count} onClick={click}/>
      <br/>
      {myPicture}
      <text className='myblue'>이름 : {info.name}</text><br/>
      <text className='myblue'>전화번호 : {info.phone}</text>
      <ul>{list}</ul>
    </div>
  );
}

const info = {
  name : '이양호',
  phone : '010-9517-6366'
};

const myPicture = <img 
                    className='myRadius' 
                    src='./MyImages/myImage.png' 
                    alt='ㅅㅅㅅ'
                    style={{
                      width:90,
                      height:90
                    }}
                    />;

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];                    
const list = products.map(prod =>
  <li key={prod.id}>
    {prod.title}
  </li>
)


function MyBtn({count, onClick}){
  return(
    <button onClick={onClick}>
      clicked {count} times
    </button>
  )
}



export default App;
