import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddPlayerForm extends Component {
  static propTypes = {
    addPlayer: PropTypes.func
  };

  playerInput = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a players's name"
          ref={this.playerInput}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
