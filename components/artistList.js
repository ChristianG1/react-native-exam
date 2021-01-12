import React, { Component } from 'react'
import { FlatList, TouchableHighlight } from 'react-native';
import ArtistBox from './artistBox';
import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component {
  constructor(props){ 
    super(props);
    this.state = { 
      ad : null
    }
  }

  componentDidMount(){
      this.updateDataSource(this.props.artists)
  }

  componentDidUpdate(newProps){
    if(newProps.artists !== this.props.artists) { 
      this.updateDataSource(newProps.artists);
    }
  }

  updateDataSource = (data) => { 
    this.setState({ad: data})
  }

  details = (data) => { 
    Actions.details({data});
  }

  render() {
    const artistBox = ({item}) => (
      <TouchableHighlight onPress = { () => {this.details(item)}}>
        <ArtistBox artist = {item} />

      </TouchableHighlight>
    )

    return(
      <FlatList 
        data = {this.state.ad}
        renderItem = { artistBox}
      />
    );
  }
}



