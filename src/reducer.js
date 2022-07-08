import { CLEAR_CART, REMOVE, TOGGLE_AMOUNT, GET_TOTALS } from './actions';
import cartItems from './cart-items';

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialState, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.toggle === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      }),
    };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += price * amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
}

export default reducer;
