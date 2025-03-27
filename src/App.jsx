import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ToDoApp from './components/ToDoApp';
import './styles/styles.css';

function App() {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}

export default App;
