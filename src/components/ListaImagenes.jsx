import Imagen from "./Imagen";


const ListaImagenes = ({imgResultado}) => {
  return ( 
    <div className="col-12 p-5 row">
      {imgResultado.map(imagen =>(
        <Imagen
          key={imagen.id}
          imagen={imagen}
        />
      ))}
    </div>
   );
}
 
export default ListaImagenes;