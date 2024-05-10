import React from "react";
import BusinessCardForm from "./BusinessCardForm";
import BusinessCardDisplay from "./BusinessCardDisplay";


export default class BusinessCardParent extends React.Component {
    constructor() {
        super();

        this.state = {
            content: "default"
        }
    }

    updateStateProperty = (targetStateKey, newStateValue) => {
        this.setState({
            [targetStateKey]: newStateValue
        })
    }

    render(){
        return (
            // <BusinessCardForm setParentState={this.updateStateProperty} content={this.state.content} />
            <BusinessCardDisplay setParentState={this.updateStateProperty} content={this.state.content} />
        )
    }
}