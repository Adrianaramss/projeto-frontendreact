import React from "react";
import styled from "styled-components";
import linkedin from "./img/linkedin.png"
import github from "./img/github.png"

const EstilizarFooter = styled.div`
    padding: 30px 30px;
    width: 100%;
    height: 15vh;
    background-color: black;
    align-items: center;

h2{
    color: white;
    text-align: center;
    font-size: large;

}

`
const ImagemRedes = styled.div`
     img {
        width: 30px;
        margin-right: 20px;  
    }

    a{
          text-decoration: none;
  
    }
` 




function Footer (){

    return(
        
          
        <EstilizarFooter>
            <h2> 
            <ImagemRedes>
            <a href="https://www.linkedin.com/in/adriana-ramss/" target="_blank">
            <img src={linkedin} ></img> </a>

            <a href="https://github.com/Adrianaramss/" target="_blank">
            <img src={github} ></img>  </a>
            </ImagemRedes>
            Desenvolvido Por Adriana
            </h2>
           
        </EstilizarFooter>   
        
        
    )

}

export default Footer;