//primeiro componente 
import "./components/styles/settings/colors.css"
import "./components/styles/elements/bases.css"



// importando js
import BtnOk from "./components/BtnOk"
import TextoNome  from "./components/TextoNome"

const $root = document.getElementById("app")
const $BtnOk = BtnOk()
const $textNome = TextoNome()


/*se for passar mais de um elemento
Devemos passar uma lsita de elementos exemplo: 
[$BtnOk, $BtnOk] passei um array com 2 elementos
e isso faz possivel o uso do 
insertAsjacentElements("beforeend",[$BtnOk, $BtnOk] )
*/


$root.insertAdjacentHTML("beforeend", $BtnOk)
$root.insertAdjacentHTML("beforeend", $textNome)

