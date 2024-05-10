import React from "react";


export default class BusinessCardDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email,
            linkedIn: this.props.linkedIn,
            gitHub: this.props.gitHub
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>Email: {this.props.email}</h1>
                <h1>linkedIn: {this.props.linkedIn}</h1>
                <h1>GitHub: {this.props.gitHub}</h1>
            </div>
        )
    }
}