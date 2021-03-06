import React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../store/sidebar/actions';

import HeaderContainer from './HeaderContainer'

class Header extends React.Component {
	render() {
		return (
			<HeaderContainer 
                uid={this.props.uid}
                login={this.props.login}

                toggleSidebar={this.props.toggleSidebar}
            />
		);
	}
};

const mapStateToProps = state => {
    return {
        uid: state.auth.uid,
        login: state.auth.login
    };
}

const mapDispatchToProps = {
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
