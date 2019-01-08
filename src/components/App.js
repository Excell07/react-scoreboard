import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  // Player id counter
  prevPlayerId = 4;

  getHighScore = () => {
    const score = this.state.players.map(p => p.score);
    const highScore = Math.max(...score);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleChangeScore = (delta, index) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            id: (this.prevPlayerId += 1),
            score: 0
          }
        ]
      };
    });
  };

  // alternative method
  // handleAddPlayer = name => {
  //   let newPlayer = {
  //     name,
  //     score: 0,
  //     id: (this.prevPlayerId += 1)
  //   };
  //   this.setState(prevState => ({
  //     players: prevState.players.concat(newPlayer)
  //   }));
  // };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      };
    });
  };

  render() {
    const { players } = this.state;
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Player list */}
        {players.map((player, index) => {
          return (
            <Player
              key={player.id.toString()}
              id={player.id}
              index={index}
              score={player.score}
              name={player.name}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleChangeScore}
              isHighScore={this.getHighScore() === player.score}
            />
          );
        })}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
