import React, { Component } from 'react';
import './App.css';

import ModalConductor from './components/ModalConductor';
import SignInModal from './components/SignInModal';
import ModalWrapper from './components/ModalWrapper';
import BoxDetailsModal from './components/BoxDetailsModal';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ModalConductor/>
          <SignInModal/>
          <ModalWrapper/>
          <BoxDetailsModal/>
          </div>

      </div>
    );
  }
}

export default App;
