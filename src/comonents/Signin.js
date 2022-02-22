import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import {Button} from '@material-ui/core'

function Signin() {
    function signInWithG() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          color: "white",
          fontWeight: "600",
        }}
        onClick={signInWithG}
      >
        Sign in with Google
      </Button>
    </div>
  );
}

export default Signin