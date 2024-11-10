import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './style.css'

export const CenterDetail = () =>{
    const {id} = useParams()
    const [center, setCenter] = useState(null)

    useEffect(
        ()=>{ 
         const getData = async () => {
            const response = await fetch(`http://localhost:4000/api/centers/${id}`)
            const data = await response.json()
            setCenter(data.data)
         } 
         
         getData()
         
         
    },[id])

    if (!center) {
      return <p>Načítám...</p>;
    }

    return(
      <div>
         <h2>{center.name}</h2>
         <p><strong> adresa: </strong> {center.address}</p>
         <p>{center.info}</p>
         <p><strong>Otevírací doba:</strong></p>
         <table> 
            <tbody>
               <tr>
                  <th>Pondělí:</th>
                  <td>{center.open.mon || 'Zavřeno'}</td>
               </tr>
               <tr>
                  <th>Úterý:</th> 
                  <td>{center.open.tue || 'Zavřeno'}</td>
               </tr>
               <tr>
                  <th>Středa:</th>
                  <td>{center.open.wed || 'Zavřeno'}</td>
               </tr>
               <tr>
                  <th>Čtvrtek:</th>
                  <td>{center.open.thu || 'Zavřeno'}</td>
               </tr>
               <tr>
                  <th>Pátek:</th>
                  <td>{center.open.fri || 'Zavřeno'}</td>
               </tr>
               <tr>
                  <th>Sobota:</th>
                  <td>{center.open.sat || 'Zavřeno'}</td>
               </tr>
               <tr>
                  <th>Neděle:</th>
                  <td>{center.open.sun || 'Zavřeno'}</td>
               </tr>
            </tbody>
         </table>
      </div>
    )
 }