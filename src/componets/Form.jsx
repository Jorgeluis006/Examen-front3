import React from 'react';
import { useState } from "react"

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handlerSubmit = (e) => {
        e.preventDefault()

        if([name,email].includes("")){
            console.log('El formulario no se completo correctamente')
            alert('El formulario no se completo correctamente')
        }else {
            console.log('El formulario se completo correctamente')
            alert('El formulario se completo correctamente')
        }
        }
  
    return (
        <>
      <form onSubmit={handlerSubmit}>

        <label htmlFor="nombre">Nombre  </label>
        <input
          type="text"
          name="name"
          
          value={name}
          onChange={e=> setName(e.target.value)}
        />

         <label htmlFor="nombre">Email </label>
        <input
          type="email"
          name="email"
         
          value={email}
          onChange={e=> setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      </>
    );
  };
  
  export default Form;