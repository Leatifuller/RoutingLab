import { useParams } from "react-router-dom";//useparams



const UserDetails=()=>{
    const { userid} =useParams();

    return (
       
                    <h1 className="text-center"> UserDetails {userid} Page</h1>
                
    )
}
export default UserDetails;