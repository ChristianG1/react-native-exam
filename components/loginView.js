import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native'; 
import { Actions } from 'react-native-router-flux';


export default class LoginView extends Component{
  constructor(){
    super();
    this.state = { 
      user: '',
      password: '' 
    };
    this.data = null;
  }

  enviarDatos = () => { 
    this.data = {user: this.state.user, password: this.state.password}
  }

  guardarText = (text) => { 
    this.setState({user: text})
  }

  guardarPass = (text) => { 
    this.setState({password: text})
  }

  direccionarHome = () => { 
    this.enviarDatos(); 
    Actions.home(this.data)
  }

  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.textMusic}>Welcome to MusicLife</Text>

          <Image
            style={styles.styleImage}
            source={require('../assets/logo2.jpg')}
          ></Image>


          <TextInput
            style={styles.styleInput} 
            onChangeText = {text => { 
              this.guardarText(text)
            }}
            placeholder={'User'}
            value={this.state.user}
         />

          <TextInput
            style={styles.styleInput} 
            onChangeText = {text => { 
              this.guardarPass(text)
            }}
            placeholder={'Password'}
            value={this.state.password}
          />
      
      <Button
          style={styles.styleButtom} 
          title = 'Iniciar sesión'
          onPress = {() => { 
            this.direccionarHome()
          }}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  },
  styleInput: {
    padding: 10,
    backgroundColor: '#fff',
    color: 'black',
    width: 300,
    marginTop: 20, 
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 }, 
    shadowColor: 'black',
    shadowOpacity: .3,
    marginBottom: 10
  },

  styleImage: { 
    width: 300, 
    height: 300 
  }, 

  textMusic: { 
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3A6BFA',
    padding: 10,
  }

});