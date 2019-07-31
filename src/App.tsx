import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

const Home = () => <div><h1>Home</h1></div>
const Topic1 = () => <div><h1>Topic1</h1></div>
const Topic2 = () => <div><h1>Topic2</h1></div>
const Topic3 = (props: any) => {
  const subtopic = props.match.params.subtopic ? props.match.params.subtopic : '';
  return <div><h1>Topic3: {subtopic}</h1></div>
}

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
        <ReactBootstrap.Col>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/topic1" component={Topic1} />
              <Route path="/topic2" component={Topic2} />
              <Route path="/topic3/:subtopic" component={Topic3} />
              <Route path="/topic3" component={Topic3} />
            </Switch>
          </ReactBootstrap.Col>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col>
            <BottomNav clickHandler={this.onBottomNavClick} />
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </Container >
    );
  }
}
