import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUSer] = useState([]);
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUSer(user);
        console.log(user);
      })
      .catch((error) => {
        console.error('error: ', error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result=> {
      const user = result.user;
      setUSer(user);
      console.log(user);
    })
    .catch((error)=>{
      console.error('error: ', error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUSer([]);
      })
      .catch(() => {
        setUSer([]);
      })
  }

  return (
    <div className="App">
      {/* condition? true : false */}
      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button>
        : 
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }

      {user.uid && <div>
        <h3>User Name: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL}></img>
      </div>}

    </div>
  );
}

export default App;
