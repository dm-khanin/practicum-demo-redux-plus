// subtotal
// tax from subtotal
// total = subtotal + tax

// array of items
// tax percent

import { createSelector } from 'reselect';

const getCartItems = user => user.cart;
const getTax = user => user.tax;

const subtotalSelector = createSelector(
  getCartItems, // [{...}, {...}, ...]
  (cart) => {
    return cart.reduce((sum, item) => {
      const res = sum + item.price;
      return res;
    }, 0);
  },
);

const taxFromSubtotal = createSelector(
  subtotalSelector, // subtotal price
  getTax,
  (subtotal, tax) => {
    return subtotal * (tax / 100);
  },
);

export const countTotal = createSelector(
  subtotalSelector,
  taxFromSubtotal,
  (subtotal, tax) => {
    return subtotal + tax;
  },
);
