import React from 'react';

export default class OurCoolerFooter extends React.Component {
    render() {
        return (
            <footer className='app-footer'>
                <div className='footer-one'>
                    <div className='feet'>
                        <img className='author-img' alt='author' src='./van-pic.png'></img>
                        <h2 className='author-name'>Vanessa Stevenson</h2>
                        <p className='author-bio'>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much I am.</p>
                    </div>
                    <div className='share'>
                        <button className='share-button'>SHARE</button>
                    </div>
                </div>
                <div className='footer-two'>
                    <div className='icon'>
                        <hr />
                        <img className='mini-logo' alt='small-icon' src='./small-logo.  png'></img>
                    </div>
                    <div className='copyright'>
                        <p className='copyright-area'>Delicious &copy; 2013 All Rights  Reserved.<br />Proudly published with Ghost.</p>
                    </div>
                </div>
            </footer>
        );
    }
}