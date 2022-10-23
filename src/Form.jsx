import './App.css';
import { useState } from 'react';



function Form() {

    const [name, setName]=useState('')
    const [pass, setPass]=useState('')

    const formHandler = () => {

    }

    const onFormSubit = (event) => {
        event.preventDefault();
        alert(name)
        alert(pass)
        console.log(name);
        console.log(pass);
    }


  return (
    <div>
      <form onSubmit={onFormSubit}>
        <  input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} name='name' id='name' required />
        <br />
        <input type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)} name='pass' id='password' required/>
        <br />
        <button type='Submit' onClick={formHandler}>Log In</button>
      </form>
    </div>
  );
}

export default Form;