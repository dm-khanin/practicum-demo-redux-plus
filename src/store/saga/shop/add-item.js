import { call, put } from 'redux-saga/effects';

const createItem = (data) => fetch('http://localhost:3001', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export default function* addItem({ payload }) {
  try {
    console.log('starting saga...');
    // yield put({
    //   type: 'SHOP_LOADER',
    //   payload: {
    //     isLoading: true,
    //   },
    // });

    const { item } = payload;

    const response = yield call(createItem, item);
    const data = yield response.json();

    yield put({
      type: 'SHOP_ADD_ITEM',
      payload: {
        item: data,
      },
    });

  } catch (e) {
    console.log(e);
  } finally {
    console.log('ending saga...');
    // yield put({
    //   type: 'SHOP_LOADER',
    //   payload: {
    //     isLoading: false,
    //   },
    // });
  }
}
