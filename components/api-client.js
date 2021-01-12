const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=ec373233ad1f980d9d06716d8f48c04b&format=json'

function getMusicData() {
  return fetch(`${URL}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
  })
  .then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => {
      return {
          id: artist.mbid,
          name: artist.name,
          imageUri: artist.image[3]['#text']
      }
  }))
}

export {getMusicData}