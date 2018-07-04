import React, {Component} from 'react';
import {Collapse, Button} from 'reactstrap';

export default class HelCollapsibleField extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            collapse: true,
        }
    }

    toggle = () => {
        this.setState({collapse: !this.state.collapse})
    }

    render() {
        const {title, children, collapsible} = this.props

        return (
            <div>
                {collapsible ? <Button onClick={this.toggle}>{title}</Button> :
                    <p>{title}</p>
                }
                <Collapse isOpen={collapsible ? this.state.collapse : true}>
                    {children}
                </Collapse>
            </div>
        );
    }
}