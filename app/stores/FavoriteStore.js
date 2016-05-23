import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class FavoritesStore {
  constructor () {
    this.locations = [];
    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      resetFavoriteLocations: LocationActions.RESET_FAVORITES
    });
  }

  addFavoriteLocation (location) {
    this.locations.push(location);
  }

  resetFavoriteLocations () {
    this.locations = [];
  }

}

export default alt.createStore(FavoritesStore, 'FavoritesStore');