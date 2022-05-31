export function addItem(item) {
  return {
    type: 'SHOP_ADD_ITEM',
    payload: { item },
  };
}

export function addItemSaga(item) {
  return {
    type: '*SHOP_ADD_ITEM',
    payload: { item },
  };
}

export function deleteItem(id) {
  return {
    type: 'SHOP_DELETE_ITEM',
    payload: { id },
  };
}

export function addItems(items) {
  return {
    type: 'SHOP_ADD_ITEMS',
    payload: { items },
  };
}

export function getAllItems() {
  return async dispatch => {
    const response = await fetch('http://localhost:3001');
    const data = await response.json();

    dispatch(addItems(data));
  };
}
