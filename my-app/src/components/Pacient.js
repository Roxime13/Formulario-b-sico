
const Pacient =({pacients, setPacientEditar, pacientEliminar})=> {
 
  const{propietari,mascota,especie,correu,data,simptomes, id}=pacients
  const handleEliminar=()=>{
   const respostaeliminar=window.confirm("Estás segur de que vols eliminar el pacient?");
      if(respostaeliminar){
        pacientEliminar(id)
      }else{
        console.log("Procès cancel.lat");
      }
    }


  return (
    <div className=" bg-blue-100 border-solid border-2 border-indigo-600 mt-0 w-96 ">
         
        <div className="md:text-left mt-2 ml-5 mb-3">
          <p className="flex items-center justify-left space-x-3 text-sm"
          ><b>Propietari:</b>{propietari}</p>
          <p className="flex items-center justify-left space-x-3 text-sm"
          ><b>Nom mascota:</b>{mascota}</p>
          <p className="flex items-center justify-left space-x-3 text-sm"
          ><b>Espècie:</b>{especie}</p>
          <p className="flex items-center justify-left space-x-3 text-sm"
          ><b>Correu:</b>{correu}</p>
          <p className="flex items-center justify-left space-x-3 text-sm"
          ><b>Data:</b>{data}</p>
          <p className="flex items-center justify-left space-x-3 text-sm"
          ><b>Símptomes:</b>{simptomes}</p>
        </div>
        <div className="flex justify-between mt-8 px-3">
          <button 
            type="button" 
            className="mb-2 bg-orange-500 hover:bg-orange-400 
            text-white font-bold py-2 px-4 border-b-4 
            border-orange-700 hover:border-orange-500 rounded"
            onClick={()=>setPacientEditar(pacients)}
          >Editar Pacient</button>

          <button className="mb-2 bg-red-600 hover:bg-red-500 
          text-white font-bold py-2 px-4 border-b-4 
          border-red-700 hover:border-red-600 rounded" 
          onClick={handleEliminar}
          type="button"
          >Eliminar Pacient</button>
        </div>
    </div>
  )
}
export default Pacient
