
import { Suspense } from 'react'
import './App.css'
import CardContainer from './assets/CardContainer'
import Navbar from './assets/Navbar'
import States from './assets/states'
import { ToastContainer } from 'react-toastify'
import Footer from './assets/Footer'

const loadProblems = () =>  fetch("/Problem.json").then((res) => res.json())

function App() {

  const problemPromise = loadProblems()
  return (
    <>
    <div>
      <header>
       <Navbar></Navbar>
    </header>
  
    <main>
      <Suspense>
        <CardContainer problemPromise={problemPromise}></CardContainer>
      </Suspense>
    </main>
     <ToastContainer
     position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"/>
       <Footer></Footer>   
    </div>
    
    </>
  )
}

export default App
