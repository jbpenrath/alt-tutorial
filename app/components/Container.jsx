import React from 'react';
import AltContainer from 'alt-container';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoriteStore';
import Locations from './Locations';
import Favorites from './Favorites';

export default class Container extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    LocationStore.fetchLocations();
  }

  render () {
    return (
      <div>
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <Locations />
        </AltContainer>

        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }

}