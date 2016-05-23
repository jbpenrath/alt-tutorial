import React from 'react';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

export default class Locations extends React.Component {
  constructor (props) {
    super(props);
  }

  addFave(ev) {
    let location = LocationStore.getLocation(Number(ev.target.getAttribute('data-id')));
    console.log(location);
    LocationActions.favoriteLocation(location);
  }

  render () {
    if(this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (LocationStore.isLoading()) {
      return (
        <div>Locations is loading</div>
      );
    }

    return (
      <ul>
        {this.props.locations.map((location, i) => {
          var faveButton = (
            <button onClick={this.addFave} data-id={location.id}>
            Favorite
            </button>
          );

          return (
            <li key={i}>
              {location.name} {location.has_favorite ? '<3' : faveButton}
            </li>
          );
        })}
      </ul>
    );
  }
}