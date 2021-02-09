/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default class SocialButtons extends React.Component {
    render() {
        return (
            <div className='social-buttons'>
                <a href='#'>
                    <img alt='facebook' src='./fb-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='twitter' src='./twit-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='google' src='./gp-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='instagram' src='./insta-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='flic' src='./flic-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='pint' src='./pint-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='rss' src='./rss-icon.png'></img>
                </a>
                <a href='#'>
                    <img alt='mail' src='./mail-icon.png'></img>
                </a>
            </div>
        );
    }
}