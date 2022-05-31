import { handleActions } from 'redux-actions';
import { addItemToCart } from './actions';

const initialState = {
  tax: 13,
  cart: [],
};

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'USER_ADD_CART_ITEM':
//       return {
//         ...state,
//         cart: [...state.cart, action.payload.item],
//       };
//     default:
//       return state;
//   }
// };

const handler = (state, action) => {
  return {
    ...state,
    cart: [...state.cart, action.payload],
  };
};

const userReducer = handleActions({
  [addItemToCart]: handler,
}, initialState);

export default userReducer;
