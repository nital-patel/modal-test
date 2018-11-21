import React, { Component } from 'react';
import './App.css';

import ModalConductor from './components/ModalConductor';
import SignInModal from './components/SignInModal';
import ModalWrapper from './components/ModalWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ModalConductor/>
          <SignInModal/>
          <ModalWrapper/>
          </div>

      </div>
    );
  }
}

export default App;
