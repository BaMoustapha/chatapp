import React from "react";
import GoogleSignin from "../assets/images/google.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Bienvenue.</h2>
      <p>Connectez avec votre compte google vous pour commencer à echanger</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
          sizes="30"
          width={30}
          height={30}
        />
      </button>
    </main>
  );
};
export default Welcome;
