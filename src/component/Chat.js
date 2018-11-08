import React, { Component } from 'react';
import '../style/Room.css'
import {startSendMessage} from '../action/chat'
import { connect } from 'react-redux'
// import { compose } from 'redux'
// import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class Chat extends Component{
  constructor(){
    super()
    this.handleSend = this.handleSend.bind(this)
  }

  handleSend = (e) => {
    e.preventDefault();
    var message = e.target.message.value;
    this.props.startSendMessage(message);
    e.target.reset();
    
  }

    render(){
      var messages = [];
        return (
            <div className="chat">
            <div className="chat-header clearfix">
              <img src={this.props.avatar} alt="avatar" style={{width: '40px'}}/>

              <div className="chat-about">
                <div className="chat-with" style={{fontSize: 'bold'}}>{this.props.name}</div>
              </div>
              <i className="fa fa-star"></i>
            </div>

            <div className="chat-history">
              <ul>
                {messages}
                {/* <li className="clearfix">
                  <div className="message-data align-right">
                    <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                      <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                  </div>
                  <div className="message other-message float-right">
                    Hi Vincent, how are you? How is the project coming along?
                    </div>
                </li>

                <li>
                  <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                    <span className="message-data-time">10:20 AM, Today</span>
                  </div>
                  <div className="message my-message">
                    Actually everything was fine. I'm very excited to show this to our team.
                    </div>
                </li> */}

              </ul>

            </div>

            <form className="chat-message clearfix" onSubmit={this.handleSend}>
              <textarea name="message" id="message-to-send" autoFocus placeholder="Type your message" rows="3"></textarea>
              <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o"></i>

              <button type="submit">Send</button>

            </form>

          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  startSendMessage: (message) => dispatch(startSendMessage(message))
})

export default connect(undefined, mapDispatchToProps)(Chat)