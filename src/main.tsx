import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './components/layouts/dashboard-layout'

const router = createBrowserRouter([
  { path: '/', element: <div>hello</div> },
  { path: 'register', element: <div>register</div> },
  { path: 'login', element: <div>login</div> },
  { path: 'dashboard', element:<DashboardLayout />, children:[{index:true, element:<h1>Dashboard main page</h1>}] },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
