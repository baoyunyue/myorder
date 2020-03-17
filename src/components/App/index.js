import React, { Component } from 'react';
import Header from '../Header'
import './style.css';
import OrderList from '../OrderList';


class App extends Component{
  render(){
    return(
      <div className='app'>
        <Header/>
        <OrderList />
      </div>
    )
  }
}

export default App;
