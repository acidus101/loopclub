import React from 'react';
import Input from './Input';
import { CircleLoader } from 'react-spinners'

const Form = ({ submitHandler, setEmail, loading }) => {
    
    return (
        <form onSubmit={submitHandler} className="flex flex-col justify-center items-center space-y-5">
            <Input setEmail={setEmail} />
            {loading ? <CircleLoader loading size={24} /> : <button className="p-3 bg-blue-500 rounded-lg text-xl" type="submit">
                SUBSCRIBE
            </button>}
        </form>
    );
};

export default Form;