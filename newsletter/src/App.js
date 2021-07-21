import React, { useState} from 'react';
import './App.css';
import Form from './components/Form'
import axios from "./axios";

function App() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  // to remove the flash messages
  const eraseFlash = () => {
    setSuccess(false);
    setErrorMessage("");
  }

  // delay 5 second before removing the messages
  function doAdelay(){
    setTimeout(function(){eraseFlash()},5000);
  };

  // handler for submitting email
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    const newUser = {
      email: email
    }
    axios.post('/subscriptions/', newUser)
      .then(res => {
        setLoading(false);
        setErrorMessage("");
        setSuccess(true);
      })
      .catch(err => {
        if (err.response.status == "400") {
          setSuccess(false);
          setErrorMessage(err.response.data.email[0])
        } else {
          setSuccess(false);
          setErrorMessage("Some error occured. Please try again.");
        }
        setLoading(false);
      });
      doAdelay();
  }

  return (
    <div className="flex flex-col xl:flex-row justify-around items-center p-8 body">
      <img className="art" src='./art.png' alt="art"></img>
      <div className="flex flex-col justify-center items-center text-white space-y-5">
        {success ? 
          (<div class="alert alert-success" role="alert">
            successfully subscribed to the newsletter.
          </div>) :
          null}
        {errorMessage != ""?
          (<div class="alert alert-danger" role="alert">
              {errorMessage}
          </div>) :
          null}
        <p className="text-center text-xl md:text-3xl lg:text-4xl text-gray-500">Subscribe To Our Newsletter</p>
        <p className="text-center text-xs md:text-lg text-gray-400">Join Millions of like minded people worldwide for our latest news</p>
        <Form setEmail={setEmail} submitHandler={submitHandler} loading={loading} />
      </div>
    </div>
  );
}

export default App;
