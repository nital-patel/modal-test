import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../data/actions.js';
import SignInModal from './SignInModal.jsx';
import BoxDetailsModal from './BoxDetailsModal.jsx';

const ModalConductor = props => {
    switch (props.currentModal) {
        case 'SOCIAL_SIGN_IN':
            return <SignInModal {...props}/>;
        case 'EDIT_BOX':
            return <BoxDetailsModal {...props}/>;

        default:
            return null;
    }
};

export default connect(state => state, () => actions)(ModalConductor);