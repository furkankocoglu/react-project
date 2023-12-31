import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState={
    cartItems:cartItems
}

export default function cartReducer(state=initialState, {type,payload}) {
    switch (type) {
        case ADD_TO_CART: 
            let product=state.cartItems.find(p=>p.product.id===payload.id);
            if (product) {
                let neProduct = Object.assign({},product);
                neProduct.quantity++;
                return {
                    ...state,
                    cartItems:[...state.cartItems.filter(p=>p.product.id!==payload.id),neProduct]            
                }
            } else {
                return {
                    ...state,
                    cartItems:[...state.cartItems,{quantity:1,product:payload}]
                }
            }
    case REMOVE_FROM_CART:
        return{
            ...state,
            cartItems:state.cartItems.filter(c=>c.product.id!==payload.id)
        }
        default:
            return state;
    }
}