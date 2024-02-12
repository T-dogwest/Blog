import BlogBejegyzes from './components/BlogBejegyzes';
import Kommentek from './components/Kommentek';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  // pages/_app.tsx


  return (
    <div className="app">
      <div className='m-5'><BlogBejegyzes /></div>
      <div className='m-5'><h2>Comments:</h2><Kommentek /> </div>
    </div>
  );


}

export default App
