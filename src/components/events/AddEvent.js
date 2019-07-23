import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class AddEvent extends Component {
    state = {
        name: '',
        address: '',
        number: '',
        errors: {}
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, address, number } = this.state;
        // check for errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
        if (address === '') {
            this.setState({ errors: { address: 'Address is required' } });
            return;
        }
        if (number === '') {
            this.setState({ errors: { number: 'Number is required' } });
            return;
        }
        const newEvent = {
            name,
            address,
            number
        }

        const res = await axios
            .post('https://jsonplaceholder.typicode.com/users', newEvent)
        dispatch({ type: 'ADD_EVENT', payload: res.data })



        this.setState({
            name: '',
            address: '',
            number: '',
            errors: {}
        })

        this.props.history.push('/');
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, address, number, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Event</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />

                                    <TextInputGroup
                                        label="Address"
                                        name="address"
                                        placeholder="Enter event address"
                                        value={address}
                                        onChange={this.onChange}
                                        error={errors.address}
                                    />

                                    <TextInputGroup
                                        label="Phone Number"
                                        name="number"
                                        placeholder="Enter a phone number"
                                        value={number}
                                        onChange={this.onChange}
                                        error={errors.number}
                                    />
                                    <input type="submit" value="Add Event" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddEvent;
