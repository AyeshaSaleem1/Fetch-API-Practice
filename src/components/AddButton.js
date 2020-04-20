import React, { Component } from 'react'
import HTTPRe from './HTTPRe'

class AddButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            delete: false
        }
    }

    postReq = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: prompt("Enter Title"),
                body: prompt("Enter Body"),
                userId: prompt("Enter UserId")
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then((test) => {
                var temp = []
                temp.push(test)
                console.log("post rreq ====== ", test);
                this.setState({ data: temp })
            })
    }

    getReq = () => {
        console.log('hello')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((test) => {
                var temp = []

                for (var k in test) {
                    temp.push(test[k])
                    console.log("get rreq ====== ", test[k]);
                }
                this.setState({ data: temp })

            })
            .catch(e => console.log("fetch error", e))

    }

    deleteReq = () => {
        var item = prompt('Enter id to delete');
        fetch('https://jsonplaceholder.typicode.com/posts/' + item, {
            method: 'DELETE'
        })
        this.setState({ data: [] })
        this.setState({ delete: true })
        console.log("delete workd")
    }

    putReq = () => {
        var item = prompt('Enter id to update');
        fetch('https://jsonplaceholder.typicode.com/posts/' + item, {
            method: 'PUT',
            body: JSON.stringify({
                title: prompt("Enter Title"),
                body: prompt("Enter Body"),
                userId: prompt("Enter UserId")
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then((test) => {
                var temp = []
                temp.push(test)
                console.log("post rreq ====== ", test);
                this.setState({ data: temp })
            })
    }
    render() {
        return (
            <div>
                <HTTPRe buttonName={'Get Request'} getReq={this.getReq.bind(this)} data={this.state.data} />
                <HTTPRe buttonName={'Post Request'} getReq={this.postReq.bind(this)} data={this.state.data} />
                <HTTPRe buttonName={'Put Request'} getReq={this.putReq.bind(this)} data={this.state.data} />
                <HTTPRe buttonName={'Delete Request'} getReq={this.deleteReq.bind(this)} data={this.state.data} delete={true} />
            </div>
        )
    }
}

export default AddButton
