import styled from "styled-components";


export const ContainerProdutos = styled.div` 
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 55px;  */
`

export const Section = styled.section`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
text-align: center;
justify-content: space-between;
background-image: url(https://pa1.narvii.com/6523/e29e26f0af562755ffa8936617c7af4f9935c9b1_hq.gif);
background-size:cover;
padding: 20px;



`

export const Main = styled.main`
   div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
     
  }
  
.textoquantidadeprodutos{
color: white;
font-size: 20px; }

`

export const DivCarrinho = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  color:white; */
  h3{
    margin-top: 50px;
    margin-block-end: 50px;
    color: white;
  }

`
