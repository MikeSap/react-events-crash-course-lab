import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    drawChromeBoiAtCoords(x,y)
  }
  
  handleClick = () => {
    toggleCycling()
  }
  
  handleKeyPress = (event) => {
    if (event.key === "a"){
      resize("+")
    }
    if (event.key === "s"){
      resize("-")
    }

  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
