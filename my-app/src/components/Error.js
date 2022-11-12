const Error = ({mensaje}) => {
  return (
<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <span className="block sm:inline">{mensaje}</span>
</div>
  )
}
//DELETE Pacient(id)-->per solucionar problemes(EX:tenir duplicat un pacient)
//DELETE Propietari(idPropietari)
//DELETE veterinari(idveterinari)
//DELETE consulta(idconsulta)

//Post Pacient
//Post propietari
//Post consulta

//PUT propietari (id), 
//put propietari{{idPacient}}
//put consulta{{idConsulta}}
//PATCH {{propietari)} Correu(patch per actualitzar alguna informació especifica)

//GET Llistapacients-->pacient,
//GET propietari
//GET mascota 
//GET especie
//GET {{datainicial}},{{datafinal}}

//exemple de base de dades:
//(Treure informació que s'han estat entre l'interval de dades)
//Cliente:idClient,nom,email
//mascota:idMascota,idclient,nom,especie,edat,simptomes,sexe
//tractaments:idtractament,idmascota,data,sintomas,veterinari
//veterinari:idveterinari,nomveterinari,dni,especialitat,dataentrada,datasortida

//GET:Obtener información
//POST:Agregar información
//PUT:Modificar información
//PATCH:Actualitzar información concreta
//DELETE:Borrar información
export default Error

//Postman get i delete param i post and put with body (try raw, else
//if x....form...