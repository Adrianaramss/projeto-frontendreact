import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
border: 0.25em solid transparent;
background-image: linear-gradient(#000, #000),
linear-gradient(#f09 0%, #0ff 50%, #9f0 100%);
background-origin: border-box;
background-clip: padding-box, border-box;
display: flex;
width:230px;
flex-direction: column;
height:600px;
border-radius: 15px;
 margin-top: 20px;
padding: 8px; 
margin-top: 20px;
color:white;


  h2{
        
    text-align: center;
    padding: 20px;
    }
    p{
      
        text-align: center;
    }
 label{
  padding:10px;
  
 }
 input{
  border-radius: 5px;
  height: 25px;
 }   
`



function Filtro(props) {
const onChangeValorMinimo = (event) => {
props.setValorMinimo(event.target.value)
}
const onChangeValorMaximo = (event) => {
  props.setValorMaximo(event.target.value)
  }
  const onChangeName = (event) => {
    props.setName(event.target.value)
    }

    return(
       <ContainerFiltro>
      <h2>
        Filtro
      </h2>

      <label> Valor mínimo:</label>
      <input type = "number"
      value={props.valorMinimo}
      onChange={onChangeValorMinimo}
      />
      
      <label> Valor máximo: </label>
      <input type = "number"
          value={props.valorMaximo}
          onChange={onChangeValorMaximo}


      />

      <label> Busca por nome: </label>
      <input type = "text"
      placeholder="Digite o planeta!"
       value={props.name}
       onChange={onChangeName}
      
      
      />
      
      
       </ContainerFiltro> 
      
    )
}                

export default Filtro;