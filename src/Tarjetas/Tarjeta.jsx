import React from 'react';
import estiloTarjeta from './Tarjeta.css';

    const Tarjeta = () => {

        const [equipo, setEquipo] = React.useState([])

        React.useEffect(() => {
            obtenerDatos()
        }, [])

        const obtenerDatos = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const usuarios = await data.json()
            console.log(usuarios)
            setEquipo(usuarios)
        }

        return (
            <div>
                <h1>
                    Listado
                </h1>
                <ul>
                  {
                    equipo.map(item => (
                    <div className="contenedor" key={item.id}><div> {item.title}</div><br></br><div>{item.body}</div></div>
                    )
                    )
                }
                </ul>
            </div>
        )
  }
  export default Tarjeta;
