import React, {useState} from 'react';
import './Card.css';

function Card(props){


   const [moedaA_Valor, setMoeda_A] = useState("");
   const [moedaB_Valor, setMoeda_B] = useState(0);

   const conversor = (e) => {

      e.preventDefault();

      let moedaA_moedaB = `${props.moedaA}_${props.moedaB}`;

      let URL = `https://free.currconv.com/api/v7/convert?q=${moedaA_moedaB}&compact=ultra&apiKey=90e290eb5c938805bd5b`

      fetch(URL)
         
         .then(res =>{return res.json()})
         .then(json=>{
            let cotacao = json[moedaA_moedaB];
            let moedaB_val = (parseFloat(moedaA_Valor) * cotacao).toFixed(2)
            setMoeda_B(moedaB_val);
         })
   }

   return(
      <div className="card-box">
         <h2>{props.moedaA} para {props.moedaB}</h2>
         <form>
            <input type="text" onChange={(e) => {setMoeda_A(e.target.value)}} placeholder="0.00"/>
            <button onClick={conversor}>Converter</button>
         </form>
         <h2 className="coverted-value">{moedaB_Valor} {props.moedaB}</h2>
      </div>
   )

}

export default Card;