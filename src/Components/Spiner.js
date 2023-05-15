import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spiner extends Component {
  render() {
    return (
      <div className='' >         
          <img src={loading} alt='' style={{ width:'50px'}} className=' mx-auto d-block'></img>
      </div>
    )
  }
}
