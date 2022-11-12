import { useState, useEffect} from 'react';
import React from 'react';
import Error from './Error';



 
const FormularioClinica=({pacient, setPacient, pacientEditar, setPacientEditar}) => {

  const [propietari, setPropietari]= useState('');
  const [mascota, setMascota]= useState('');
  const[especie, setEspecie]= useState('');
  const [correu, setCorreu]= useState('');
  const[data, setData]= useState('');
  const[simptomes,setSimptomes]= useState('');
  const [error,setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(pacientEditar).length>0){
        setPropietari(pacientEditar.propietari);
        setMascota(pacientEditar.mascota);
        setEspecie(pacientEditar.especie);
        setCorreu(pacientEditar.correu);
        setData(pacientEditar.data);
        setSimptomes(pacientEditar.simptomes);
      }
  }, [pacientEditar])

    const generarId= () => {
      const random1=Math.random().toString(32).substring(3);
      const random2=Date.now().toString(32);
      return random1 + random2
    }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if([propietari, mascota, especie, correu, data, simptomes].includes('')){
      setError(true)
      return;
    } 
      setError(false)
    const objectePacient={
      propietari,
      mascota,
      especie,
      correu,
      data, 
      simptomes
    }
    if(pacientEditar.id){
     objectePacient.id=pacientEditar.id
     const pacientactualitzat=pacient.map(pacientState=>(pacientState.id
      ===pacientEditar.id?objectePacient:pacientState))
      setPacient(pacientactualitzat)
      setPacientEditar({})

     }else{
      objectePacient.id=generarId();
      setPacient([...pacient,objectePacient])
     }

    setPropietari('')
    setMascota('')
    setEspecie('')
    setCorreu('')
    setData('')
    setSimptomes('')
   
  }
 
      return ( 
        <div className="md:text-center ml-40">
          <p className="md:text-center">Afegeix pacients i 
          <span className="text-blue-700 text-bold"> administra</span>
        </p><br/>

        <h1 className="bg-cyan-600 font-bold uppercase block"
        >Formulari ingrés pacients</h1>
        <form  onSubmit={handleSubmit} 
          className="bg-blue-100 border-solid border-2  border-indigo-600 w-96 mt-0">
          {error&& <Error mensaje='Tots els camps són obligatoris'/>}

          <div className="mb-0">
             <label htmlFor="Propietari" 
             className="mt-6 flex items-center justify-center space-x-2 text-sm font-bold"
             >  Nom del propietari:</label>
             <input className=" ring-2 ring-indigo-500 text-center w-48"  
              id="propietari"
               type="text"
               placeholder="Nom del propietari"
               value={propietari} 
               onChange={(e)=> setPropietari(e.target.value)}/>
               
          </div>
   
          <div className="mb-3">
             <label htmlFor="Mascota" 
             className="mt-6 flex items-center justify-center space-x-2 text-sm font-bold"
             >  Nom de la mascota: </label>
             <input 
             className="border-solid border-2 
             border-indigo-600 text-color-black text-center w-48" 
                id="mascota"
                 type="text"
                 placeholder="Nom Mascota" 
                 value={mascota} 
                 onChange={(e)=> setMascota(e.target.value)}
                 />
          </div>
         
          <div className="mb-3">
             <label htmlFor="Especie" 
             className="mt-6 flex items-center justify-center space-x-2 text-sm font-bold"
             >Espècie:</label>
             <select className=" ring-2 ring-indigo-500 text-center w-48"
                id="especie"
                 value={especie} 
                 onChange={(e)=>setEspecie(e.target.value)}>
                <option value=''>Seleccionar</option>
                <option value='Gos'>Gos</option>
                <option value='Gat'>Gat</option>
                <option value='Ocell'>Ocell</option>
                <option value='Ratolí'>Ratolí</option>
                <option value='Conill'>Conill</option>
                <option value='Peixos'>Peixos</option>
                <option value='Hámster'>Hámster</option>
              </select>
          </div>
   
          <div className="mb-3">
             <label htmlFor="Correu"
             className="mt-6 flex items-center justify-center space-x-2 text-sm font-bold"
             >Correu electrònic</label>
             <input className=" ring-2 ring-indigo-500 text-center w-48" 
                id="correu"
                 type="email"
                 placeholder="Correu electrònic" 
                 value={correu} 
                 onChange={(e)=> setCorreu(e.target.value)}/>
          </div>
   
          <div className="mb-3">
             <label htmlFor="Data" 
             className="mt-6 flex items-center justify-center space-x-2 text-sm font-bold"
             >Data d'alta:</label>
             <input className=" ring-2 ring-indigo-500  text-center w-48" 
                 id="data"
                 type="date" 
                 placeholder="Data d'alta" 
                 value={data} 
                 onChange={(e)=> setData(e.target.value)}/>
          </div>
   
          <div className="mb-3">
             <label htmlFor="Símptomes"
             className="mt-6 flex items-center justify-center space-x-2 text-sm font-bold"
             >Símptomes:</label>
             <textarea  className="ring-2 ring-indigo-500 w-72 text-center h-24"
               id="simptomes"
               type="text"
               placeholder="Símptomes del pacient" 
               value={simptomes} 
               onChange={(e)=> setSimptomes(e.target.value)}/>
          </div>
              <input
              className=" mb-2 bg-blue-500 hover:bg-blue-400 text-white font-bold 
              py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-32"  
              type="submit" 
              value={pacientEditar.id? "Editar pacient" : "Afegir pacient"} 
              />
        </form>
        </div>
      )
}
export default FormularioClinica


 






