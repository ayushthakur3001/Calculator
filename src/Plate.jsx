
import {useState } from 'react'
import Light from './Light'



const Plate = () => {
  
    const [a, setA] = useState(1);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    

    const t1 = ()=>{
        setA(1);
        setB(0);
        setC(0);
        

    }
    const t2 = ()=>{
        setA(0);
        setB(1);
        setC(0);
        

    }
    const t3 = ()=>{
        setA(0);
        setB(0);
        setC(1);
        

    }
 

    
    
    return (
        <div>
          <div>
            <div className='modes'>
                <button className="mbtn1" name="light" onClick={t1}  >Light </button>
                <button className="mbtn2" name="dark" onClick={t2} >Dark </button>
                <button className="mbtn3" name="glass" onClick={t3}>Glass </button>
            </div>
        </div>

        
        
        
        <Light a1={a} b1={b} c1={c} />
        
        
    
        
        
            
            
        </div>
       
    )
}

export default Plate
