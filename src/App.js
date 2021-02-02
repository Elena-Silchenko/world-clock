import React from 'react'
import './App.css'
import Timer from './timer/'
// import Logo from './logo/'

import Map from './map/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timers: {
        'Krakow': 0,
        'Kiev': +8,
        'London': -1,
      },
      timeZone: 0
    }
    this.timeZoneUpdate = this.timeZoneUpdate.bind(this)
  }

  timeZoneUpdate(timeZone) {
    this.setState({
      timeZone: timeZone
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Logo /> */}
          <Map update={this.timeZoneUpdate} />
          <Timer title={`From map ${this.state.timeZone}`} shift={this.state.timeZone}/>
          <div className="timer-container">
            {
              Object.keys(this.state.timers).map(key => {
                return <Timer key={key} title={key} shift={this.state.timers[key]}/>
              })
            }
          </div>
        </header>
      </div>
    )
  }
}

export default App
