import React, { Component } from 'react';
import '../style/Room.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Chat from './Chat'
import {startChat} from '../action/chat'

const firebase = require("firebase")


class Room extends Component {
  constructor(){
    super()
    this.handleChat = this.handleChat.bind(this)
  }

  handleChat(user, userObj){
    const data = {
      id: user,
      displayName: userObj.displayName
    }
    this.props.startChat(data);
  }

  render() {

    if (!isLoaded(this.props.users)) {
      return <div>Loading...</div>
    }
    if (isEmpty(this.props.users)) {
      return <div>No user</div>
    }
    let userList = []
    var estimatedServerTimeMs = 0;
    var amOnline = firebase.database().ref('.info/connected');
    var userRef = firebase.database().ref('users/' + this.props.uid.uid + '/connections');
    amOnline.on('value', function (snapshot) {
      if (snapshot.val()) {
        var offsetRef = firebase.database().ref(".info/serverTimeOffset");
        offsetRef.on("value", function (snap) {
          var offset = snap.val();
          estimatedServerTimeMs = new Date().getTime() + offset;
        });
        var date = new Date(estimatedServerTimeMs);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();

        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        userRef.onDisconnect().set("last online " + formattedTime);
        userRef.set("online")
      }
    });
    for (var user in this.props.users) {
      if(this.props.uid.uid !== user){
        userList.push(
          <li className="clearfix" key={user} onClick={() => this.handleChat(user, this.props.users[user])}>
            <img src={this.props.users[user].avatarUrl} alt="avatar" style={{ width: "40px" }} />
            <div className="about">
              <div className="name">{this.props.users[user].displayName}</div>
              <div className="status">
                <i>{this.props.users[user].connections}</i>
              </div>
            </div>
          </li>
        )
      }
        
    }
    return (
      <div>
        <div className="container clearfix">
          <div className="people-list" id="people-list">
            <div className="search">
              <input type="text" placeholder="search" />
              <i className="fa fa-search"></i>
            </div>
            <ul className="list">
              {userList}
            </ul>
          </div>
          <Chat />
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startChat: (data) => dispatch(startChat({type:'SEND_USER', data}))
})

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth,
    users: state.firebase.data.users,
  }
}

export default compose(
  firebaseConnect((props) => [
    { path: 'users' }
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Room)