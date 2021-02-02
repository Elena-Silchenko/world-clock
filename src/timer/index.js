import React from 'react'

import './index.css'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ''
    }
  }

  componentDidMount() {
    setInterval(() => {
      let now = new Date()
      now.setTime(now.getTime() + this.props.shift * 60 * 60 * 1000)
      this.setState({
        time: now.getHours() + ':' + this.pad(now.getMinutes()) + ':' + this.pad(now.getSeconds()) 
      })
    }, 1000)
  }

  pad(value, digits = 2) {
    value = String(value)
    while(value.length < digits) {
      value = '0' + value
    }
    return value
  }

  render() {
    return (
      <div>{this.time()}</div>
    )
  }

  time() {
    if(this.state.time.length < 1) return 'Please wait...'
    return (
      <div className='timer'>
        <div className='timer-city'>{this.props.title}:</div>
        <div className='timer-time'>{this.state.time}</div>
      </div>
    )
  }
}

export default Timer