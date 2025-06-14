
import '../styles/Cart.css'
function Cart() {
    const produit_1 = "monstera"
    const produit_2 = "lierre"
    const produit_3 = "bouquet"

    const prix_1 = 8
    const prix_2 = 10
    const prix_3 = 15
    return (
        <div className="lmj-cart">
            <ul>
                <li>{produit_1 + " - " + prix_1}</li>
                <li>{produit_2 + " - " + prix_2}</li>
                <li>{produit_3 + " - " + prix_3}</li>
            </ul>

            <h2>Total : {prix_1 + prix_2 + prix_3}</h2>
        </div>
    )
}

export default Cart