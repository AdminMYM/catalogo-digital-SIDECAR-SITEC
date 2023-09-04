import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getItemById } from "../helpers/getItemById"
import{ items}from '../data/items'

export const ItemPage = () => {
	const { id } = useParams()
	
	const navigate = useNavigate()

	const item = useMemo(()=> getItemById(id, [id]))
	console.log('este es: ', item)

	const onNavigateBack = ()=>{
		navigate(-1)
	}

	// if(!hero){
	// 	return <Navigate to="/marvel" />
	// }

	return (
		<div className="row mt-5">
			<div className="col-4">
					<img
						src={`${item.url}`}
						className="img-thumbnail animate__animated animate__fadeInLeft"
					/>
			</div>

			<div className="col-8">
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><b>OEM:</b> {item.oem}</li>
					<li className="list-group-item"><b>Marca:</b> {item.marca}</li>
					<li className="list-group-item"><b>SITEC:</b> {item.codigoCliente}</li>
					<li className="list-group-item"><b>País:</b> {item.pais}</li>
					{item.pesoNetoUnitario ? <li className="list-group-item"><b>Peso Neto Unitario:</b> {item.pesoNetoUnitario} kg</li> : '' } 
					<li className="list-group-item"><b>Descripción</b> {item.descripcion}</li>
				</ul>

				<h5 className="mt-3">Especificaciones</h5>
				<p>{item.characters}</p>

				<button 
					className="btn btn-outline-primary"
					onClick={onNavigateBack}
				>
						Regresar
				</button>

			</div>
		</div>
	)
}
