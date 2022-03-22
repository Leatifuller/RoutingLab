import {BrowserRouter, Routes, Route} from 'react-router-dom';//{}-autocorrect to prevent error in writing code
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Films from "./films";
import People from "./people";






const App =()=>{
   
    return (
        <main className="container mt-5">
            '<section className="row justify-content-center">
                <div className="col-md-6">

                <div className='d-flex justify-content-center'>
            <Link to="/">Go Home</Link>
            <Link to="/films">View Films</Link> 
            <Link to="/people">View People</Link> 
            
            </div>

        <BrowserRouter>
        <Routes>
           <Route path="/home" element={<Home/> }/>
           <Route path="/about" element={<About/> }/>
           <Route path="/faq"element={<Faq />}/>
           <Route path="/users"element={<Users/>}/>
           <Route path="/users/:userid"element={<UserDetails/>}/>
           <Route path="*" element={<h1> 404 Not Found :</h1>}/>
           <Route path="/" component={Home} /> 
           <Route path="/films" component={Films} /> 
           <Route path="/films/:id" component={Feature} />
           <Route path="/people" element={<People/>} />
           <Route path="/people/:id" component={Person} />



        </Routes>
         </BrowserRouter>
        </div>
        </section>
        </main>
       
    )}
export default App;  
    