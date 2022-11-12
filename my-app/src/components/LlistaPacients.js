import Pacient from './Pacient'

const LlistaPacients= ({pacient, setPacientEditar,pacientEliminar}) => {
 

  return (
    <div className="md:text-center ml-20">
      {pacient && pacient.length?(
        <>
          <p className="md:text-center">Administra els teus 
          <span className="text-blue-700 text-bold"> pacients</span></p><br/>
          <h2 className="bg-cyan-600 font-bold uppercase block">Llista de pacients</h2>
          <div className="top-16 overflow-y-scroll h-[540px]">
    
          {pacient.map(pacients=>(
            //pacients dins pacient.map és una nova variable(d'1 sol pacient)
            <Pacient
              key={pacients.id}
              pacients={pacients}
              setPacientEditar={setPacientEditar}
              pacientEliminar={pacientEliminar}
            />
          ))}
        </div>
        </>
      ) : (
      <p className="md:text-center ml-20 ">Afegeix un pacient i sortirà 
      <span className="text-blue-700 text-bold"
      > la llista</span></p>
      )}
    </div>
    )  
}
export default LlistaPacients
