import { takeLatest } from 'redux-saga/effects';
import addItem from './shop/add-item';

export default function* mySaga() {
  yield takeLatest('*SHOP_ADD_ITEM', addItem);
}
