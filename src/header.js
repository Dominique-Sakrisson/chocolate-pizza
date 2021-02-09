import React from 'react';
import SocialButtons from './buttons.js'

export default class OurCoolerHeader extends React.Component {
    render() {
        return (
            <header className='app-header'>
                <div className='titles'>
                    <img className='big-logo' alt='logo' src='./logo.png'></img>
                    <h1 className='app-title'>Delicioso</h1>
                    <h3 className='sub-title'>The Best Food Blog On the Web</h3>
                </div>
                <SocialButtons />
            </header>
        );
    }
}