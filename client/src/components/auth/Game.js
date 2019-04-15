import React, { Component } from "react";
class Game extends Component {
  render() {
    return (
      <div>
        <h1>Hello, FivePlayers!</h1>
        <h2>
          This is game component display in auth directory
          <br />
          Directions on how to control the game go here!
        </h2>
        <a href="/game.html" target="_blank">
          Play Game
        </a>
      </div>
    );
  }
}
export default Game;
