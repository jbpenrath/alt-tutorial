import alt from '../alt';
import LocationActions from '../actions/LocationActions';
import LocationSource from '../sources/LocationSource';
import FavoritesStore from './FavoriteStore';

class LocationStore {
  constructor () {
    this.locations = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorites: LocationActions.FAVORITE_LOCATION
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(LocationSource);
  }

  handleUpdateLocations (locations) {
    this.locations = locations;
    this.errorMessage = null;
  }

  handleFetchLocations () {
    this.locations = [];
  }

  handleLocationsFailed (errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites () {
    this.locations = this.locations.map((location) => {
      return {
        id: location.id,
        name: location.name,
        has_favorite: false
      }
    });
  }

  setFavorites (location) {
    this.waitFor(FavoritesStore);
    const favoritedLocations = FavoritesStore.getState().locations;
    this.resetAllFavorites();

    favoritedLocations.forEach((location) => {
        for(var i=0; i < this.locations.length; i++) {
          if(this.locations[i].id === location.id) {
            this.locations[i].has_favorite = true;
            break;
          }
        }
    });
  }

  getLocation (id) {
    const {locations} = this.getState();
    for (let i = 0; i < locations.length; i++) {
      if(locations[i].id === id) {
        return locations[i];
      }
    }

    return null;

  }

}

export default alt.createStore(LocationStore, 'LocationStore');