import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () =>{
    return(
        <div className="cart">
            <img src={cart} alt='cart'/>
            <span>6</span>
        </div>
    )
}

export default CartWidget