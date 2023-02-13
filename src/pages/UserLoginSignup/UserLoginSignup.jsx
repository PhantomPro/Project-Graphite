import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";

export default function UserLoginSignup() {
  const [isSignupPage, setIsSignupPage] = useState(true);
  return (
    <>
      {isSignupPage ? (
        <Signup setIsSignupPage={setIsSignupPage} />
      ) : (
        <Login setIsSignupPage={setIsSignupPage} />
      )}
    </>
  );
}
