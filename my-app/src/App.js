import React from 'react'
import { useState,useEffect } from 'react';
import HeaderClinica from './components/HeaderClinica'
import FormularioClinica from './components/FormularioClinica';
import LlistaPacients from './components/LlistaPacients';


function App() {
  const [pacient, setPacient]=useState([]);
  const [pacientEditar, setPacientEditar]=useState({})
  
  useEffect(()=>{
    const obtenerLS=()=>{
      const pacientLS=JSON.parse(localStorage.getItem('pacients')) ?? [];
      setPacient(pacientLS)
    }
    obtenerLS();
  },[]);
  
  useEffect(()=>{
    localStorage.setItem('pacients', JSON.stringify(pacient))
  }, [pacient])

  const pacientEliminar = id =>{
    const pacientactualitzat=pacient.filter(pacients=>pacients.id !==id)
    setPacient(pacientactualitzat)
  }
  
  
  return (
    <div className="container mx-auto mt-20">
    
        <HeaderClinica/>
     
      <div className="mt-6 md:flex">
        <FormularioClinica
          pacient={pacient}
          setPacient={setPacient}
          pacientEditar={pacientEditar}
          setPacientEditar={setPacientEditar}
        />
        <LlistaPacients
          pacient={pacient}
          setPacientEditar={setPacientEditar}
          pacientEliminar={pacientEliminar}
        />
      </div>
    </div>
 
  );
}
export default App;
