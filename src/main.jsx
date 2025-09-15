import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './components/Orders/Orders.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/register',
        element:<Register/>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders /></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
