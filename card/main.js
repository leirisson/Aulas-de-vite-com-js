import "./src/components/elements/colors.css"
import Card from "./src/components/Card"


const $root = document.getElementById("app")
const $card = Card()

$root.insertAdjacentHTML("beforeend", $card)

console.log($card)