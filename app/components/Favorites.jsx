import React from 'react';
import LocationStore from '../stores/LocationStore';

export default class Favorites extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <li key={i}>{location.name}</li>
          );
        })}
      </ul>
    );
  }
}