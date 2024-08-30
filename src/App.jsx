import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"


export default function App(){

  return (
    <>
      <Header />

      <Main>
        <input type="text" />
        <button></button>
      </Main>
      <Footer autor="Ana"/>
    </>
   
  )
}





// {
// 	"Cria um componente": {
// 		"prefix": ".componente",
// 		"body": [
// 			"export default function ${1:Componente}(){",
// 			"",
// 			"\treturn (",
// 			"\t\t<>$0</>",
// 			"\t)",
// 			"}",
// 			"",
// 		],
// 		"description": "Cria um componente funcional"
// 	}
// }


// {
// 	"Componente css": {
// 		"prefix": ".componente-css",
// 		"body": [
// 			"import styles from ./${1:Componente}.module.css",
// 			"",
// 			"export default function ${1:Componente}(){",
// 			"",
// 			"\treturn (",
// 			"\t\t<>$0</>",
// 			"\t)",
// 			"}",
// 			"",
// 		],
// 		"description": "Cria um componente funcional com estilo"
// 	}
// }