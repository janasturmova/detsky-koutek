import { Link } from "react-router-dom"
import './style.css'

export const ErrorPage = () => {
    return(
        <div className="container">
            <h1 className="error-headline">Tato stránka neexistuje</h1>
            <nav>
                <Link to='/homepage'>Domů</Link>
            </nav>
        </div>
    )
}