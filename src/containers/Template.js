import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from 'material-ui/FlatButton';

//injectTapEventPlugin();

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTuring</h1>
            <Button 
            onClick = {()=> {console.log('Button clicked')}}
            primary={true}>tap</Button>
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>

    )
  }
}

export default Template
