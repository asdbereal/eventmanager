import React, { Component } from 'react'

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.addressInput = React.createRef();
        this.numberInput = React.createRef();
    }


    onSubmit = (e) => {
        e.preventDefault();
        const event = {
            name: this.nameInput.current.value,
            address: this.addressInput.current.value,
            number: this.numberInput.current.value
        }
        console.log(event)
    }

    static defaultProps = {
        name: 'name 1 ',
        address: 'unknown',
        number: '9999'
    }



    render() {
        const { name, address, number } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Event</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref={this.nameInput}

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="address"
                                name="address"
                                className="form-control form-control-lg"
                                placeholder="Enter Address..."
                                defaultValue={address}
                                ref={this.addressInput}

                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="number">Number</label>
                            <input
                                type="text"
                                name="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Number..."
                                defaultValue={number}
                                ref={this.numberInput}

                            />
                        </div>
                        <input type="submit" value="Add Event" className="btn btn-light btn-block" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddEvent;