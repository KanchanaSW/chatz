import './App.css';
import Chats from './comonents/Chats';
import Signin from './comonents/Signin';
import { auth } from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] =useAuthState(auth)
  return (
  <div className='App'>
  {user ? <Chats /> : <Signin />}
  </div>
  );
}

export default App;
