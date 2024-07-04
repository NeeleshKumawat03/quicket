import React from 'react';
import { Provider } from 'react-redux';
import ShowPersonProfile from './components/ShowPersonProfile';
import store from './redux/store';
import './App.css'
const App = () => {
  return (  
    <Provider store={store}>
      <div className='container'>
      <ShowPersonProfile/>
      </div>
    </Provider>
  );
};

export default App;


