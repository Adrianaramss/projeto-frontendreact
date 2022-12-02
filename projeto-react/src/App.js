
import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import Filtro from './Components/Filtro';
import Footer from './Components/Footer'
import { Section, ContainerProdutos, Main,DivCarrinho } from './Components/StyleComponents';
import CardProduto from './Components/CardProduto';
import jupiter from './Components/img/jupiter.jpg';
import lua from './Components/img/lua.jpg';
import marte from './Components/img/marte.jpg';
import mercurio from './Components/img/mercurio.jpg';
import neturno from './Components/img/neturno.png';
import venus from './Components/img/venus.jpg';
import Urano from './Components/img/Urano.jpg';
import saturno from './Components/img/saturno.jpg'
import Carrinho from './Components/Carrinho';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  
  }
`;


const listaviagens = [
  {

    id: 1,
    name: "Viagem Jupiter",
    value: 5100,
    img: jupiter,

  },

  {

    id: 2,
    name: "Viagem  Lua",
    value: 8500,
    img: lua,

  },
  {

    id: 3,
    name: "Viagem Marte",
    value: 3000,
    img: marte,

  },

  {

    id: 4,
    name: "Viagem Mercurio",
    value: 1200,
    img: mercurio,

  },

  {

    id: 5,
    name: "Viagem  Neturno",
    value: 3800,
    img: neturno,

  },
  {

    id: 6,
    name: "Viagem  Vênus",
    value: 2000,
    img: venus,

  },

  {

    id: 7,
    name: "Viagem Saturno",
    value: 4500,
    img: saturno,

  },

  {

    id: 8,
    name: "Viagem Urano",
    value: 2910,
    img: Urano,

  },


]

console.log(listaviagens)

function App() {
///filtro-busca////
  const [valorMinimo, setValorMinimo] = useState(-Infinity)
  const [valorMaximo, setValorMaximo] = useState(Infinity)
  const [name, setName] = useState("")

////adicionar no carrinho///

const [AdicionaCarrinho, setAdicionaCarrinho] = useState ([])
 
let [ContadorCarrinho] = useState(1)

////ordenação crescendo e decrecente//
  const [ordenar, setOrdenar] = useState("")
  const [todasasviagens] = useState(listaviagens)


  const crescente = (a, b) => {return a.value - b.value}
  const decrescente = (a, b) => {return b.value - a.value}
  const orderninicial = (a, b) => {return a.id - b.id}

  switch(ordenar) {
    case "crescente":
        todasasviagens.sort(crescente)
    break;  
    case "decrescente":
        todasasviagens.sort(decrescente)
    break;
    case "":
        todasasviagens.sort(orderninicial)
    break;
  }
///////Adiciona Produto Carrinho//////////////////////////////////////////////////////

const AdicionarProdutonoCarrinho = (itemAdd) =>{

  if(AdicionaCarrinho.includes(itemAdd)){
    return ContadorCarrinho ++
  }else{
    const produtosCarrinho = todasasviagens.filter((item)=>{  
      return item.id === itemAdd 

    })

  setAdicionaCarrinho([...AdicionaCarrinho, ...produtosCarrinho])

  }
}

/////////soma carrinho/////////////////////////////////////////////////////////////

let preçoTotal = 0;
AdicionaCarrinho.map((item) => (preçoTotal= preçoTotal + item.value  ));
console.log(preçoTotal)
console.log(todasasviagens)

///////remover produto carrinho//////////////////////////////////////////////////////
const RemoverProduto = (index) => {
  const NovoCarrinho = [...AdicionaCarrinho]

  const indexProcurar = NovoCarrinho.findIndex (
    (ProdutoNoCarrinho) => ProdutoNoCarrinho.id === index.id
  )
  NovoCarrinho.splice(indexProcurar,1)
  setAdicionaCarrinho(NovoCarrinho)
  // localStorage.setItem("AdicionaCarrinho", JSON.stringify(NovoCarrinho))

}

// useEffect(
//   ()=>{
// const NovoCarrinho = JSON.parse(window.localStorage.getItem("AdicionaCarrinho"))
// setAdicionaCarrinho(NovoCarrinho)

//   },[]);


  return (

    <>
      <GlobalStyle />
      <Header>
      </Header>
      <Section className='geral'>
        <Filtro valorMinimo={valorMinimo} setValorMinimo={setValorMinimo} valorMaximo={valorMaximo} setValorMaximo={setValorMaximo}  name={name} setName={setName}>


        </Filtro>


        <Main>
          <div className="textoquantidadeprodutos">
            <p>Quantidade de produtos: {listaviagens.length} </p>
            <label> Ordenar:
            <select value={ordenar} onChange={(e)=>setOrdenar(e.target.value)}>
            <option value=""></option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
            </select>
          </label>
          </div>
          
       


          <div>
            {listaviagens
            .filter((listaviagem) => {
              return listaviagem.value >= valorMinimo || valorMinimo === ""


            } ) 
            .filter((listaviagem) => {
              return listaviagem.value <= valorMaximo || valorMaximo === ""

            } ) 
            .filter((listaviagem) => {
              return  listaviagem.name.toLowerCase().includes(name.toLowerCase());

            

            } ) 


             .map((listaviagens) => {
              return(
                <ContainerProdutos>

                  <CardProduto
                    key={listaviagens.id}

                    onClick={()=> {AdicionarProdutonoCarrinho(listaviagens.id)}}    listaviagens= {listaviagens}
                    imagem={listaviagens.img}
                    titulo={listaviagens.name}
                    valor={listaviagens.value}
                    

                  />
                </ContainerProdutos>
              )
            })}
          </div>
        </Main>


       
        <Carrinho
         total ={preçoTotal}
          const AddCarrinho = {AdicionaCarrinho.map((item,id) =>{
            return (
              <>
              <p>{item.ContadorCarrinho}</p>
              <p>{item.name} R${item.value},00  </p> 
              <button onClick={()=>RemoverProduto(id)}> remover</button> 

              </> 
             )

          })}>

        </Carrinho>
      
      {/* <DivCarrinho>
        <h3>Preço Total: R$ {preçoTotal},00</h3>   

      </DivCarrinho> */}
  
      </Section>
      

      <Footer>
      </Footer>
    </>

    );
  }


export default App;
