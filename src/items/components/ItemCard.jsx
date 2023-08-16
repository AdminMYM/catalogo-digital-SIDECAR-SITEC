import { Link } from "react-router-dom"

// const CharactersByAutoPart = ({pais, characters})=> {
// 	return (pais === characters)
// 	? <></>
// 	: <p>{characters}</p>
// }

export const ItemCard = ({
	id,
	url,
	name,
	publisher,
	pais,
	first_appearance,
	characters,
	oem,
	codigoCliente,
	descripcion,
	etiqueta_familia
	
}) => {
		const itemImageUrl = `${url}`
		return(
			<div className="col animate__animated animate__fadeIn">
				<div className="card">
					<div	className="row no-gutters">
						<div className="col-4">
							<img src={itemImageUrl} className="card-img" alt={name} />
						</div>
						<div className="col-8">
							<div className="card-body">
								<h5 className="card-title">{name}</h5>
								<p className="card-text">{oem}</p>
								<p className="card-text">{codigoCliente}</p>
								{/* <CharactersByAutoPart alter_ego={pais} characters={etiqueta_familia} /> */}
								<p className="card-text">
									<small className="text-muted">{descripcion}</small>
								</p>
								<Link to={`/hero/${id}`}>
									Más
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

