import React, { Component } from 'react';
import FacebookLogin from './components/facebooklogin/facebooklogin';
import WhatsApp from './components/whatsapp/WhatsApp';
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';
class App extends Component {


  render(){
    return(
      <html><div>
        <FacebookLogin/>

      </div></html>
    );
  }


}
export default App;
