import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="header">
            <div className="container">
              <div className="logo">
                <h1>
                  <a href="/"><span className="sr-only">Creator Arcade</span>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="179px" height="40px" viewbox="0 0 179 40" enable-background="new 0 0 179 40" xmlSpace="preserve">
                      
                    </svg>
                  </a>
                </h1>
              </div>
              <button name="Menu" className="menu js-mobile-menu"><span className="line top"></span><span className="line mid"></span><span className="line bot"></span></button>
              <div id="navigation">
                <nav className="nav">
                  <ul className="lvl1">
                    <li><a href="/pages/courses/">Explore</a></li>
                    <li className="-dropdown"><a href="">Account</a>
                      <button className="sub-nav js-sub-nav icon-arrow" name="Sub-navigation"></button><ul className="lvl2" data-height="92" style={{height: '0px'}}>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Sign Out</a></li>
                      </ul>
                    </li>
                    <li><img src="/assets/creatorarcade/images/temp/avatar.jpg" alt="Avatar" className="avatar" /></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
