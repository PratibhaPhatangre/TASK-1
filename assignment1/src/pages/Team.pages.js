import img1 from "../Assets/sim.jpg";
import img2 from "../Assets/juda.jpg";
import img3 from "../Assets/sup.jpg";
import img4 from "../Assets/jape.jpg";
const Team=()=>{
    return(
        <>
     <div class="container">
  <div class="row">
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img1} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Team Mates</h5>
    <p class="card-text">Phatangre Simran Balasaheb</p>
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img2} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Team Mates</h5>
    <p class="card-text">Deogune Prajakta Shivaji</p>
   
  </div>
</div>
    </div>
    
  </div>
</div>

<div class="container mt-4">
  <div class="row">
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img3} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Team Mates</h5>
    <p class="card-text">Phatangre Supriya Balasaheb</p>
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img4} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Team Mates</h5>
    <p class="card-text">Jape Pratibha Vijay</p>
   
  </div>
</div>
    </div>
    
  </div>
</div>
       
        
        </>
    )
}
export default Team;