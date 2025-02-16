import './App.css'
import Dashboard from './components/Dashboard'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Quiz from './components/Quiz'
import Home from './components/Home'
import QuizTest from './components/QuizTest'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/quiz",
          element: <Quiz/>
        },
        {
          path: "/test",
          element: <QuizTest/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
