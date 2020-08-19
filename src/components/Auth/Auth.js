import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  signoutUser = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" id="login-button" onClick={this.loginClickEvent}>Login</button>
        <button className="btn btn-warning" id="logout-button" onClick={this.signoutUser}>Logout</button>
      </div>
    );
  }
}

export default Auth;
