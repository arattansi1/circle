import React, { Component } from 'react';

class SubjectArea extends Component {
    constructor(props){
        super(props);
        // this.myElement = null;
        // this.tl = null;
    }

    render() {
        return (
            <div class="subject-area">
                <img className="subject-area-img" src={this.props.img}/>
                <p className="subject-title">{this.props.title}</p>
            </div>
        )
    }
}

export default SubjectArea;