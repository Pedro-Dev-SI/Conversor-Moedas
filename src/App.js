import React from 'react';
import './App.css';
import Card from './components/Card';

function App(){
  
  return(
    <div className="App">
      <h1>Conversor de Moedas</h1>
      
      <div className="row">
        <Card moedaA="BRL" moedaB="USD"/>
        <Card moedaA="USD" moedaB="BRL"/>
      </div>
      <div className="row">
        <Card moedaA="BRL" moedaB="EUR"/>
        <Card moedaA="EUR" moedaB="BRL"/>
      </div>
      <div className="row">
        <Card moedaA="USD" moedaB="EUR"/>
        <Card moedaA="EUR" moedaB="USD"/>
      </div>
      <div className="row">
        <Card moedaA="BRL" moedaB="CAD"/>
        <Card moedaA="CAD" moedaB="BRL"/>
      </div>
      <div className="row">
        <Card moedaA="BRL" moedaB="JPY"/>
        <Card moedaA="JPY" moedaB="BRL"/>
      </div>
      <div className="row">
        <Card moedaA="USD" moedaB="JPY"/>
        <Card moedaA="JPY" moedaB="USD"/>
      </div>
      <div className="row">
        <Card moedaA="EUR" moedaB="JPY"/>
        <Card moedaA="JPY" moedaB="EUR"/>
      </div>
      
    </div>
  )
  
}

export default App;
