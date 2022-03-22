import {Link} from 'react-router-dom'


const Home=()=>{
    return (
       <>
                    <h1 className="text-center"> Home Page</h1>
                    <Link to="/users" className='btn btn-1'>
                            View Users details
                    </Link>
                    
              
        </>
    )
}
export default Home;