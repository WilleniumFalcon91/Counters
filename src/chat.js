import React, { Component } from 'react';

class Chatroom extends Component {

    constructor (props) {
        super(props);
        this.state = {
            message: "",
            typing: "",

        }
    }
    render () {
        return (
            <div className="Chatroom">
                <div className="CommentThread">
                    <h1>{this.state.message}</h1>
                </div>
                <div className="CommentBox">
                    <form onSubmit={this._comment}>
                        <input type="text" onChange={this._change} placeholder="Write your message here." value={this.state.typing}/>
                        <input type="submit" value="send"/>
                    </form>
                </div>
            </div>
        )
    }

    _comment = (event) => {  
        event.preventDefault();   
        console.log(this.state); 
        this.setState({
            message: this.state.message + this.state.typing
        });
    }

    _change = (event) => {
        this.setState({
            typing: event.target.value
        })
    }
}

export default Chatroom;