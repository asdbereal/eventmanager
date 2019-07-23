import React, { Component } from 'react'

class test extends Component {
    state = {
        title: '',
        body: ''
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }));
    }
    // componentWillMount() {
    //     console.log('componentWillMount...')
    // }
    // componenDidUpdate() {
    //     console.log('componentDIdUpdate...')
    // }
    // componentWillReceiveProps(nextProps, state) {
    //     console.log('componentWillReceiveProps.. ')
    // }
    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default test;
