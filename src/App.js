import React from 'react';

//import the containers Component that change the state of store
//in normal React-App you pass on App.js the UI Component
//But with redux we need to pass de Container that change the state of store
import { NewColor, Colors } from './connect.js';

const App = ({store}) =>
  <div className="app">
    <NewColor store={store} />
    <Colors store={store} />
  </div>

export default App;
