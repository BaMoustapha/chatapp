import React from "react";
import GoogleSignin from "../assets/images/google.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user, loading] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  console.log("User:", user);

  return (
    <nav className="text-white bg-blue-800 nav-bar">
      <h1>React Chat</h1>
      {loading ? (
        <div>Loading...</div>
      ) : user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="text-center sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
            sizes="20"
            width={20}
            height={20}
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
