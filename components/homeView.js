import React, { Component } from 'react';
import { View, StyleSheet, Button} from 'react-native';
import ArtistList from './artistList';
import { getMusicData } from './api-client';

export default class HomeView extends Component {
  constructor(props) { 
    super(props)
    this.state = { 
      artists: null
    }
  }
  
  componentDidMount() { 
    getMusicData().then(data => { 
      this.setState({ artists: data });
    });
  }

  render() { 
    const artists = this.state.artists;
    return (
        <View style={styles.container}>
          {artists && <ArtistList artists = {artists}/>}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3A6BFA',
    alignItems: "center",   
  }, 
})
