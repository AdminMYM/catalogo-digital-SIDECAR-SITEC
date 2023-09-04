import { ItemCard } from "./ItemCard"
import { getItemByPublisher } from "../helpers/getItemByPublisher"
import { useMemo, useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"

export const ItemList = ({publisher}) => {
	const items = useMemo(()=> getItemByPublisher(publisher),[publisher])
	const {setFlag} = useContext(AuthContext)
	const counter = items.length
	setFlag(counter)
	
	return (
		<div className="row row-cols-1 row-cols-md-3 g-3">
			{
				
				items.map(item =>{
					return <ItemCard key={item.id} {...item}/>
				}
				
				)
			}
		</div>
	)
}
