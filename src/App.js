import './App.css';
import { connect } from 'react-redux';
import Good from './components/good';

import { addItemSaga, deleteItem, getAllItems } from './store/shop/actions';
import { useEffect } from 'react';
import { addItemToCart } from './store/user/actions';
import { countTotal } from './selectors/count-total';

function App({ items, addItemSaga, cart, getItemsFromServer, addItemToCart, total }) {
  const submit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { title, price, img } = form.elements;
    addItemSaga({
      title: title.value,
      img: img.value,
      price: price.value,
    });
  };

  useEffect(() => {
    getItemsFromServer();
  }, []);

  return (
    <div className="App">
      <header className="AppHeader">
        <h1>SUPER MEGA STORE</h1>
        <div>Cart Items: {cart.length} (total: {total})</div>
      </header>
      <main>
        {items.map((item, i) => {
          return <Good key={i} {...item} onClick={() => addItemToCart(item)}/>;
        })}
      </main>
      <form className="AppForm" onSubmit={submit}>
        <input name="title" placeholder="Title"/>
        <input name="img" placeholder="IMG"/>
        <input name="price" placeholder="Price"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ shop, user }) => {
  return {
    items: shop.data,
    cart: user.cart,
    total: countTotal(user),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemSaga: (item) => {
      dispatch(addItemSaga(item));
    },
    onDecrement: (id) => {
      dispatch(deleteItem(id));
    },
    getItemsFromServer: () => {
      dispatch(getAllItems());
    },
    addItemToCart: (item) => {
      dispatch(addItemToCart(item));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
