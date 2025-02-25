import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variavel, Função...
// camelCase

// Nomeação  de classes
// kebab-case

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header/>

// element.style {
//   background-color: antiquewhite;
//   padding: 20px;
//   margin: 20px;
//   border: solid 5px black;
//   /* box-sizing: content-box; */
//   width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por -

// Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props"

// Objetos são {}
// Arrays são []

/* Jeito mais eficiente de escrever if else, seria {"props" ? Sim : Não} */

/* {items === 5 ? (
  <>
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
  </>
) : (
  <>
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
    <SingleItem />
  </>
)} */

// Maneira prática de fazer um Array que usa o tamanho do props como index base, o .fill() serve para preencher os valores, e o .map() para definir com quais valores ele será preenchido. Sendo assim, específicado o <SingleItem />, evitando ter que fazer 10 linhas.

// {Array(items)
//   .fill()
//   .map(() => (
//     <SingleItem />
//   ))}

// Novo método Array dinâmico que pega importação do nosso database, eu utilizao Array criado lá, pra trazer as informações necessárias do projeto, como id, name, image, banner. Dito isso, o Array foi modificado com um método de filter, já que o database estava trazendo todos os 20 artistas, e como a ideia é só 5, foi utilizado o método .filter, para especificar quantos objetos deveriam retornado, como descrito a baixo, ele irá retornado oque foi definido no "items".

// {artistArray
//   .filter((currentValue, index) => index < items)
//   .map((currObj, index) => (
//     <SingleItem
//       id={currObj.id}
//       name={currObj.name}
//       image={currObj.image}
//       banner={currObj.banner}
//       key={`${title}-${index}`}
//     />
//   ))}

// Spread Operator - Usado para desestruturar informações, por exemplo tenho um Array e quero passar para um componente filho, através dele consigo enviar as informações.
// ...

// {artist === undefined ? "Artista" : artist}
// {artist === undefined} e só {artist} resultantam os dois em "undefined"
// Funciona deste mesmo modo também
// {artista ?? "Artista"}, vai ser nulo, se não, ele usa o mesmo valor, se for nulo, então ele preenche com o mesmo valor inicial, se não, ele escreve "Artista"

// TemplateString é oto de concatenar utilizando crase ``, funciona para juntar objetos por ex: `${idPath}/${id}`

// Instalando o pacote de Router, npm i react-router-dom
// Utilizando o Router é possível navegar entre as páginas dentro do projeto, detalhe é trocar todos as tags <a></a> por <Link></Link> e os href="" para to="", não esquecendo de importar no documento sempre que necessário.

// Para configurar o Router no App.jsx, deverá ser importado o BrowserRouter, Routes e Route. A tag vazia <> </> mudará para <BrowserRouter></BrowserRouter>, dentro disso ficará instanciado o sistema de rotas, <Routes></Routes> e dentro dele as seguintes rotas, começando com <Route></Route>, dentro dele, estabelecer o path="/" necessário, e elemento relacionado dele, caso seja necessário solicitar o ID dele, é possóvel especificar dentro do path, por ex: path="/artists/:id".

// Método Ifelse com Ou junto, do tipo undefined, a ideia é checar atraves dos props, qual componente será renderizado em qual tela, como foi definido type="artists" para a tela de artistas, somente o ItemList de artistas aparecerá lá, e também deverá mostrar na home, mas como a home não tem uma definição, a ideia é comparar se é artistas e também undefined, assim fazendo com que apareça nas duas telas.

// {type === "artists" || type === undefined ? (
//   <ItemList
//     title="Artistas"
//     items={10}
//     itemsArray={artistArray}
//     path="/artists"
//     idPath="/artist"
//   />
// ) : (
//   <></>
// )}

// Para fazer uma função que cheque qual página o elemento se encontra, usamos "useLocation", uma importação da biblioteca do React-Router-Dom, nele conseguimos atribuir o valor da url a alguma variável, assim conseguindo manipulá-la quando necessário, muitio util para if else específicos.

// Duas maneiras de checar se o pathname é a home, se for, os items que irão aparecer terá seu valor fixo, caso contrário, o valor será infinito, a segunda opção é a mais eficiente.

// isHome ? (finalItems = items) : (finalItems = Infinity);

// finalItems = isHome ? items : Infinity;

// Através do useLocation, consigo criar uma variável e atribuir um props à ela, fazendo uma validação que considera um link em específico, por exemplo, se eu especificar que o link atual possui /artists, ele não mostrará tal elemento, caso contrário ele mostrará. Isso tudo desestruturando os componentes.

// useParams, funciona parecido com o useLocation, mas ele leva em consideração a parametrização do objeto/componente, neste exemplo ele está recebendo o id, conforme foi passando anteriormente pelo <Route path="/artist/:id" element={<Artist />} />, nisso, ao invés de retornar somente a url, ele trará a url junto com o id. Podendo atribuir à uma variável em questão.

// const { id } = useParams();

// Agora consigo comparar meu Array com o id necessário que vem junto com a página.

// const artistObj = artistArray.filter(
//   (currentArtistObj) => currentArtistObj.id === Number(id)
// )[0];

// O artistArray foi puxado pra conseguir as informações do artista em questão, ja que a lógica compara o ID da página do artista, sendo assim, ele irá criar um objeto através do filter, que retornará todas as informações dos artistas presentes dentro do Array, e como eu quero puxar somente o id, eu defino ele como parâmetro e comparo com id da url, se for condizente com o id do artista, ele irá retornar a imagem, as músicas, o banner, etc. Tudo de forma dinâmica. Com o [0], consigo juntar todas as informações necessárias do primeiro id do Array.

// Neste exemplo abaixo, estou utilizando outro Array de Músicas, pra checar se o Id do Artista, correponde com o compositor das músicas, nesse caso, ele pega o artistArray, atribuí a uma varíavel, e depois no próximo songArray, ele consegue comparar, se o artista que está relacionado com a música, é o mesmo que está destacado na página.

// const songsArrayfromArtist = songsArray.filter(
//   (currentSongObj) => currentSongObj.artist === artistObj.name
// );

// Neste método ele está fazendo uma conta, o Math.random(), diz que ele precisa pegar um valor aleatório do tipo float, caso eu precise que ele seja por exemplo, até 10, preciso multiplicar ele por 10, mas sempre lembrando de diminuir um, (10 - 1), pois o indice 0, conta como primeiro, sendo assim, pra eu conseguir formatar ele, e arredondar para um número inteiro, devo envolver o Math.random(), entre outra função chamada de Math.floor(), que consiste em arredondar. Com isso pronto, podemos pegar o tamanho do array necessário, e utilizar .length, assim chegamos no valor total de ids presentes no array.

// const randomIndex = Math.floor(
//   Math.random() * (songsArrayfromArtist.length - 1)
// );
// const randomIdFromArtist = songsArrayfromArtist[randomIndex].id;

// Quando componentes se re-renderizão?
// Uma das ocasiões é quando uma varíavel de estado usada por esse componente é atualizada.

// Hook - useState

// Quando utilizando useState, basicamente nossa varíavel se torna um Array, sendo o primeiro valor nossa varíavel, e o segundo valor, a varíavel nova, tornando assim possível, a re-renderização de um objeto.

// const [items, setItems] = useState(5);

// Como eu preciso que meus items altere, assim que faço a ação de apertar no botão "Ver mais", ele atualizará o valor, e somara +5 sempre que fizer essa ação, o valor de items, se torna setItems.

// setItems(items + 5);
