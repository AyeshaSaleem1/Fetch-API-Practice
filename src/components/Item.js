import React, { Component } from 'react'
import './Component.css';

 class Item extends Component {
     constructor(props) {
         super(props)
     }
     
    render() {
        return (
            <div>
                <ul>
                <li > <i>ID:</i>{this.props.tuple.id} </li>
                <li > <i>Title:</i> {this.props.tuple.title} </li>
                <li > <i>Body:</i> {this.props.tuple.body} </li>
                </ul>
            </div>
        )
    }
}

export default Item
