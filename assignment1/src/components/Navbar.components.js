import { Link } from "react-router-dom"

const Navbar=()=>{
    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 mb-5 ">
  <div className="container-fluid">
    <a class="navbar-brand " className="navbar-brand" href="#">
    <img src="https://cdn.dribbble.com/users/1153970/screenshots/8073693/instagramartboard_2_4x.jpg" alt="" width="33" 
    height="40" class="d-inline-block align-text-top me-3"></img>Fantastic Four</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className=" nav justify-content-end">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className=" nav justify-content-end">
          
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>

        <li className=" nav justify-content-end">
         
          <Link  className="nav-link" aria-current="page" to="/team">Team</Link>
          
        </li>
        

        
      </ul>
      
    </div>
  </div>
  </nav>
    </>
  
    )
  }
  export default Navbar