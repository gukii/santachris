import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatBot from 'react-simple-chatbot';

/*
import { ThemeProvider } from 'styled-components';


// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
*/



/* (  <a href="#" onClick={ this.toggleState() => { console.log('clicked..', toggled); toggled = !toggled }}>
                      { toggled? "toggled!!" : "not toggled" }
                    </a>
                    */

export class MultiChoiceButton extends Component {

  state = { toggled: false }

  componentDidMount() {
    console.log('MultiChoiceButton Props:', this.props);
  }

  toggleState = (e) => {

    e.preventDefault();
    e.stopPropagation();
    this.setState({ toggled: !this.state.toggled });
    //this.props.triggerNextStep({ value: '1', trigger: '1' } );
    //this.props.triggerNext('1');
    //this.props.triggerNext();
  }

  render() {

    return (
      <a href="www.yahoo.com" onClick={this.toggleState} value={ this.state.toggled? this.props.value : '' } style={ this.state.toggled? styles.toggledYes : styles.toggledNo }> { this.state.toggled? this.props.textYes : this.props.textNo }</a>
    );
  }
}




const steps=[
    {
      id: '0a',
      message: 'Choose what to buy:',
      trigger: '0b',
    },
    {
      id: '0b',
      component: <MultiChoiceButton textYes="Yes, Oranges" textNo="Oranges" value="oranges" />,
      trigger: '0c',
      //user: true,
      asMessage: true,
    }, 
    {
      id: '0c',
      component: <MultiChoiceButton textYes="Yes, Apples" textNo="Apples" value="apples" />,
      trigger: '0d',
      asMessage: true,
    },       
    {
      id: '0d',
      options: [
        { value: 1, label: 'continue', trigger: '1' },
      ]
    },     
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'What number I am thinking?',
      trigger: '5',
    },    
    {
      id: '5',
      options: [
        { value: 1, label: 'Number 1', trigger: '6' },
        { value: 2, label: 'Number 2', trigger: '6' },
        { value: 3, label: 'Number 3', trigger: '7' },
      ],
    },  
    {
      id: '6',
      message: 'Wrong answer, try again..',
      trigger: '5',
    },     
    {
      id: '7',
      message: 'Awesome, you are a telepath!',
      end: true,
    },       
  ];




class App extends Component {



  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
              <ChatBot 
                steps={steps} 
                cache={true} 
                floating 
                headerTitle="Support"
              />
        </div>          
      </div>

    );
  }
}

export default App;


const styles = {
  toggledYes : {
    color: "yellow", 
    textDecoration: "none",
    fontWeight: "bold",
  },
  toggledNo: {
    color: "white", 
    textDecoration: "none",
    fontWeight: "normal",

  }
}