import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="my-3">
        <div id="box-container">
        <div className='boxes box1'></div>
        <div className='boxes box2'></div>
        <div className='boxes box3'></div>
        </div>
        <div className="text">
        <b>Loading...</b>
        </div>
      </div>
    )
  }
}
