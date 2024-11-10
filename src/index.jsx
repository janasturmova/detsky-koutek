import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './global.css';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { CentersPage } from './pages/CentersPage/CentersPage';
import { CenterDetail } from './pages/CenterDetail/CenterDetail';

const App = () => {
  return(
    <div className="container">
      <h1>Dětský koutek</h1>
      <nav>
        <Link to='/'>Domů</Link>
        <span>|</span>
        <Link to='/about'>O nás</Link>
        <span>|</span>
        <Link to='/centersPage'>Pobočky</Link>
        <span>|</span>
        <Link to='/contact'>Kontakt</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

const router = createBrowserRouter ([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/centersPage',
    element: <CentersPage/>,
    children: [
      {
        path: ':id',
        element: <CenterDetail/>
      }
    ]
  },
  {
    path: '/contact',
    element: <Contact/>
  },
]
}])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router}/>);
