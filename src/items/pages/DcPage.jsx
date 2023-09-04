import { ItemList } from "../components"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import { items } from '../data/items'
import { ItemCard } from "../components/ItemCard"

export const A = () => {
	const { arbi, setFlag } = useContext(AuthContext)
	const item = items.filter(item => item.categoria === arbi)
	console.log('el numero es: ' + item.length)
	setFlag(item.length)
	return (
		<div className="row row-cols-1 row-cols-md-3 g-3">
			{item.map(i => (<ItemCard {...i} />))}
		</div>
	)
}


export const DcPage = () => {
	const { arbi, flag } = useContext(AuthContext)

	return (
		<>
			{
				arbi ?
					<div>
						<h1>{arbi}</h1>
						<h5>Cantidad de productos: {flag}</h5>

						<A />
					</div>
					:
					<div className="dcPage">
						<h1>Autopartes</h1>
						<h3>Cantidad de productos: {flag}</h3>
						<hr />
						<ItemList publisher='otro' />
					</div>
			}
		</>
	)
}
