import "./style.css"
function Card(){
    return /*html*/`

    <section class="container">
        <div class="flip" id="card">

            <div class="face" id="front">
            FRONT
            </div>
            <div class="face" id="back">
            BACK
            </div>
        </div>

    </section>
    `
}

export default Card