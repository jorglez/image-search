import { useState, useEffect } from 'react'
import Form from "./components/Form";
import axios from 'axios';
import ListaImagenes from './components/ListaImagenes';
import PrevPage from './components/PrevPage';
import NextPage from './components/NextPage';

function App() {

  const [busqueda, setBusqueda] = useState("")
  const [imgResultado, setImgResultado] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    if (!busqueda) return

    const consulta = async () => {
      const porPagina = 30
      const key = '21806388-c70f8d11e5db73c2a1af9860c'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${porPagina}&page=${currentPage}`

      const apiCall = await axios.get(url)
      setImgResultado(apiCall.data.hits)

      setTotalPages(Math.ceil(apiCall.data.totalHits / porPagina))

      //mover la pantalla al tope al cambiar de página
      const jumbotron = document.querySelector(".jumbotron")
      jumbotron.scrollIntoView({ behavior: "smooth" })
    }
    consulta()

  }, [busqueda, currentPage])

  const prevPage = () => {
    if (currentPage > 1) {
      const newCurrPage = currentPage - 1
      setCurrentPage(newCurrPage)

    }

  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      const newCurrPage = currentPage + 1
      setCurrentPage(newCurrPage)

    }
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador De Imágenes</p>

        <Form
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        {currentPage === 1 ? null : <PrevPage prevPage={prevPage} />}

        {(totalPages === 1 || currentPage === totalPages) ? null : <NextPage nextPage={nextPage} />}
      </div>
      <ListaImagenes
        imgResultado={imgResultado}
      />
      <div className="row justify-content-center">
        {currentPage === 1 ? null : <PrevPage prevPage={prevPage} />}

        {(totalPages === 1 || currentPage === totalPages) ? null : <NextPage nextPage={nextPage} />}
      </div>
    </div>
  );
}

export default App;
