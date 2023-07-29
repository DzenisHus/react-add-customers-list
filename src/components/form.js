import React from 'react';
import './../App.css';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { InputLabel } from './input-label.js';
import UsersContext from './../constants/users.js';

function Form() {
  const {setUsers} = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (newUser) => {
    const randomKey = Math.random().toString(36).substring(7);
    setUsers(prevUsers => ({
      ...prevUsers,
      [randomKey]: newUser
    }));

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel type="text" 
            label="First Name" 
            name="firstName" 
            register={register} errors={errors} 
            required={{required: true}} 
            requiredText="This field is required" 
        />
        <InputLabel type="text"
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            required={{required: true}}
            requiredText="This field is required" 
            defaultValue=""
        />
        <InputLabel 
            type="number" 
            label="Years of Experience" 
            name="yearsOfExperience" 
            register={register} 
            errors={errors} 
            required={{required: true, max: 99, min: 2}} 
            requiredText="This field is required" 
        />

        <button type="submit" className='px-10 text-xl my-5 py-3 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm hover:bg-cyan-700 ease-in duration-200'>Submit</button>
    </form>
    );
}

export default Form;

