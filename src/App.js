import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
// import { useState } from 'react';


function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Home />
    // },
   { path: "/",
    element: <Footer/>
   }
  ]);

  return <RouterProvider router={router} />;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);

export default App;