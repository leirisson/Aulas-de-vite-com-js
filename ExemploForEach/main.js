import "./src/components/Bases/reset.css"
import "./src/components/Bases/colors.css"

import CardPtodutos from "./src/components/CardProdutos"

const $root = document.getElementById("app")


$root.insertAdjacentHTML("beforeend",`
    ${CardPtodutos()}
`)