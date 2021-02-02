import React from 'react'

import map from './map.gif'
import './index.css'

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this.updateWidth = this.updateWidth.bind(this) 
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.updateWidth()
    })
  }

  updateWidth() {
    let map = document.querySelector('.map')
    if(!map) return
    let width = map.offsetWidth / 24
    this.setState({
      width: width
    })
  }

  timeZoneOffset(index) {
    return {
      left: index * this.state.width,
      width: this.state.width
    }
  }

  timeZoneClicked(timeZone) {
    this.props.update(timeZone)
  }

  render() {
    return (
      <div className="map">
        <img src={map} className="map-image" alt="As you wish..." onLoad={this.updateWidth} />
        {
          Array.from({ length: 24 }).map((_, index) => {
            return <div key={index} className="time-zone" style={this.timeZoneOffset(index)} onClick={() => this.timeZoneClicked(index - 11)} />
          })
        }
      </div>
    )
  }
}

export default Map