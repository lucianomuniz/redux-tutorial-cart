import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
};

export default App;
