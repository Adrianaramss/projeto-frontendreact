import React from "react";
import styled from "styled-components";
import foguete from "./img/foguete.png";

const Container = styled.div`
    display: flex;
    padding: 60px 50px;
    width: 100%;
    text-align: center;
    height: 60px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    /* background: rgb(64,39,121);
    background: radial-gradient(circle, rgba(64,39,121,1) 0%, rgba(231,89,32,1) 100%); */
    font-size: 30px;
    font-family: 'Trebuchet MS';
    background-color:black;

    h2{
        
        color:white;
    }
`


 function Header (){

        return(
         <Container>
            <div>
              
            <h2>
            <img src={foguete} width="40px"></img>  
                Viagens Espaciais
             
            </h2>
                
            </div>
        </Container>
            
        )
    
}

export default Header;