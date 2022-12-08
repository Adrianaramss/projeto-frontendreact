import React from "react";
import styled from "styled-components";
import logoCarrinho from "./img/logo-carrinho.png";



const ContainerCarrinho = styled.div`
border: 0.25em solid transparent;
background-image: linear-gradient(#000, #000),
linear-gradient( #f09 0%, #0ff 50%, #9f0 100%);
background-origin: border-box;
background-clip: padding-box, border-box;
display: flex;
width:259px ;
flex-direction: column;
height:600px;
border-radius: 15px;
margin: 25px;
padding: 8px;
color: white;
margin-top: 20px;

p{
  text-align: center;
  padding: 10px;
}

button{
margin-left: 15px;
height:20px;
  &:hover{
    cursor: pointer;
    background-color: rgb(131,58,180);
    color: white;
  }
}
`




function Carrinho(props) {

  return (
    <ContainerCarrinho>
      <h2>
        <img src={logoCarrinho} width="30px"></img>

        Carrinho
      </h2>
      <p>{props.AddCarrinho} </p>
      <h3>Preço Total: R$ {props.total},00</h3>   
      
    </ContainerCarrinho>

  )
}

export default Carrinho;


