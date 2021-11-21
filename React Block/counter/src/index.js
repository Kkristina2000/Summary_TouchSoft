import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import './style.css'

const Counter = () =>{
  const [count,setCount]=useState(0);
  
  function Parity () {
    if(count%2==0){
      return 'Введено чётное число';
    }
    else{
      return 'Введено нечётное число';
    }
  }

  const style = {
    background: count%2==0 ? 'blue' : 'red'
  };
 
  return(
    <div className="wrapper">
        <div style={style} className="counter">
          <div className="count">{count}</div>
          <div className="parity">{Parity()}</div>
          <div className="buttons">
            <button className="button" disabled={count==0} onClick={()=>setCount(count-1)}>-</button>
            <button className="button" onClick={()=>setCount(0)}>Reset</button>
            <button className="button" onClick={()=>setCount(count+1)}>+</button>
          </div>
        </div>
    </div>
  );
};
ReactDOM.render(
  <Counter />, document.getElementById('root')
);
