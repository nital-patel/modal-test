import React, { Component } from 'react';
import './App.css';

import ModalConductor from './components/ModalConductor';
import SignInModal from './components/SignInModal';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ModalConductor/>
          <SignInModal/>
          </div>

      </div>
    );
  }
}

export default App;
