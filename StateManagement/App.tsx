import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './slices';

const store = createStore(rootReducer);

function App() {
  return <Provider store={store}>{/*Todo 컴포넌트*/}</Provider>;
}

export default App;