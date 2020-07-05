import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import WhatsApp from  "../whatsapp/WhatsApp";
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';
export default class MyComponent extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };


  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      //email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
            <html><WhatsApp/></html>

        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="262638221477821"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <html><div>{fbContent}</div></html>;
  }
}
