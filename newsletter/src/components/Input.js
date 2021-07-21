import React from 'react';

const Input = ({setEmail}) =>{
    const emailHandler = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
    }
    return (
      <div>
        <div className="mt-1 relative rounded-xl shadow-lg justify-center items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 text-xl"><i className="far fa-envelope"></i></span>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            onChange = {emailHandler}
            className="focus:ring-indigo-500 text-center block w-8 min-w-full pl-7 text-xl text-black border-gray-500 input-box"
            placeholder="you@examle.com"
          />
        </div>
      </div>
    )
  }
  
  export default Input;