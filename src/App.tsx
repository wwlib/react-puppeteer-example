import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

export default class App extends React.Component {

  onHeaderClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  onTopNavClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  onBottomNavClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  render() {
    return (
      <Container>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <Header clickHandler={this.onHeaderClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <TopNav clickHandler={this.onTopNavClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <BottomNav clickHandler={this.onBottomNavClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </Container >
    );
  }
}
