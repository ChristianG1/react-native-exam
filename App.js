import React from 'react';
import LoginView from './components/loginView'; 
import HomeView from './components/homeView';
import Details from './components/details';
import { Stack, Scene, Router } from 'react-native-router-flux';


export default function App(){
  
    return (
      <Router> 
        <Stack key="root">
          <Scene key="login" component={LoginView} title="Logim" hideNavBar />
          <Scene key="home" component={HomeView} title = "Home" />
          <Scene key="details" component={Details} title="Detalles" />
        </Stack>
      </Router>
    );
}

