import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import {items} from '../data/items'
import { ItemList } from "./ItemList"
import { ItemCard } from "./ItemCard"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"


export const MenuItem = () => {
	const { setArbi } = useContext(AuthContext)
	const [e, setE] = useState('')
	const navigate = useNavigate()

	useEffect(()=>{
		const li = document.getElementsByClassName('list-item')
		const list = [...li]
		list.map(item => {
			item.addEventListener('click', ()=>{
				const menuItem = document.querySelector('.menu-item')
				menuItem.classList.toggle('inactive')
				navigate('/dc')
				setArbi(item.innerHTML)
			})
		})


	},[e])
	
	return (
		<div className="menu-item inactive" >
			<ul>
			<h2>Categorías de productos</h2>
				<li className='list-item' >Electroventiladores</li>
				<li className='list-item' >Extremo Dirección</li>
				<li className='list-item' >Maza Rueda</li>
				<li className='list-item' >Parrilla Suspensión</li>
				<li className='list-item' >Poleas</li>
				<li className='list-item' >Portamazas</li>
				<li className='list-item' >Rótula Suspensión</li>
			</ul>
			<div className="menu-background"></div>
		</div>
	)
}
