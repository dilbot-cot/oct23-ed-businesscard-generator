import React from "react";


export default class BusinessCardForm extends React.Component {

    render() {
        return (
            <section className="businessCardForm">
                <label htmlFor="nameInput">Name:</label>
                <input type="text" name="content" className="nameInput" value={this.props.content} onChange={(event) => {this.props.setParentState(event.target.name, event.target.value)}} />
            </section>
        )
    }
}