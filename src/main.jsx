import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Projects from './projects.jsx'
import NotFound from './NotFound.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'

const routes = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/projects", element: <Projects/>},
  {path: "*", element: <NotFound/>},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)

