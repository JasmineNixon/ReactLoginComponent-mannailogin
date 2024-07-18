import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import LoginComponent from './Components/Login/LoginComponent';
import './Theme.scss';
import logo from './images/logo.png';

const handleLogin = async (username, password) => {
  console.log(username, password);
};

const logoSize = {
  width: '80px', // Adjust width as needed
  height: 'auto', // Maintain aspect ratio
  marginBottom: 10,
};

const App = () => {
  // const login = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });

  return (
    <div className="App">
      {/* Your other components or login forms can go here */}
      
      <GoogleOAuthProvider clientId="189037989545-mbqduckm5l5khf8fs2f9k9eouhaaovuh.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        {/* <button onClick={() => login()}>Sign in with Google 🚀</button> */}
      </GoogleOAuthProvider>
    </div>
  );
};

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);
