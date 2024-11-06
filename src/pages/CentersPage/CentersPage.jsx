import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"


export const CentersPage = () => {
    const [center, setCenter] = useState([])

    useEffect(
        ()=>{ 
         const getData = async () => {
            const response = await fetch('http://localhost:4000/api/centers')
            const data = await response.json()
            setCenter(data.data)
         } 

         getData()
         
    },[])
    
    return(
        <div className="container">
            <h1>Pobočky</h1>
            <ul>
                {center.map((item) => (
                    <li key={item.id}>
                        <nav><Link to={`/pobocky/${item.id}`}>{item.name}</Link></nav>
                        <p>{item.address}</p>
                        <Outlet/>
                    </li>
                    
                ))}
            </ul>
            
        </div>
    )
}