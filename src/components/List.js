import React, { Component } from 'react'
import Item from './Item'
import './Component.css';
class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
        }

    }

   





    render() {
        //console.log(this.state.data)
        return (
            <ul>
                {
                    this.props.data.map((r) => {
                        return (
                            <> <li><b>User Id :</b> {r.userId}</li>
                                <Item tuple={r} />
                            </>
                        )
                    }
                    )
                }
            </ul>
        )
    }
}

export default List
