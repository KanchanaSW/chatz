import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase.js'

function Signout() {
  return (
    <div className="head">
      <h3 style={{paddingLeft: "20px"}}>Chtzz</h3>
      <Button
        style={{
          padding: "20px",
          fontSize: "15px",
          color: "white",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default Signout