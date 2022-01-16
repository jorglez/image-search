import { useState } from 'react'
import Error from './Error'



const Form = ({setBusqueda}) => {

  const [term, setTerm] = useState("")
  const [error, setError] = useState(false)

  const buscarImagenes = e=>{
    e.preventDefault()

    //validar
    if(term.trim() ==="") return setError(true)

    //enviar datos si está correcto todo
    setError(false)
    setBusqueda(term)

  }

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar imágenes"
            onChange={e => setTerm(e.target.value)}
          />
        </div>
        <div className="form group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>

      {error? <Error msj="Agrega un término de búsqueda" />: null}
    </form>
  );
}

export default Form;