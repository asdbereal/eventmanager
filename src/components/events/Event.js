import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';



class Event extends Component {
    state = {
        showEventInfo: false
    };
    onDeleteClick = async (id, dispatch) => {
        try {
            await axios
                .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({ type: 'DELETE_EVENT', payload: id })
        } catch (e) {
            dispatch({ type: 'DELETE_EVENT', payload: id })
        }


    }

    render() {
        const { id, name, address, number } = this.props.event;
        const { showEventInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} <i onClick={() =>
                                this.setState({
                                    showEventInfo:
                                        !this.state.showEventInfo
                                })
                            }
                                className="fas fa-sort-down"
                                style={{ cursor: 'pointer' }}>
                            </i>
                                <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />

                                <Link to={`event/edit/${id}`}>
                                    <i className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            marginRight: '1rem'
                                        }}
                                    ></i>
                                </Link>

                            </h4>
                            {showEventInfo ? (<ul className="list-group">
                                <li className="list-group-item">Address: {address}</li>
                                <li className="list-group-item">Number of Guests: {number}</li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>


        )
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired

}

export default Event;
