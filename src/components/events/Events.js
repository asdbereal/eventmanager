import React, { Component } from 'react';
import Event from './Event';
import { Consumer } from '../../context';
class Events extends Component {

    render() {

        return (
            <Consumer>
                {value => {
                    const { events } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2 ">
                                <span className="text-primary ">Event </span> List
                            </h1>
                            {events.map(event => (
                                <Event
                                    key={event.id}
                                    event={event} />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Events;
