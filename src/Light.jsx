import { arr } from './odd'
import { useState } from 'react'
import './light.css'

const Light = ({a1, b1, c1}) => {
  const [tex, setTex] = useState("");
  
  
  
  const handleClick = (val) => {
    setTex(tex.concat(val));

  }

  const backspace = () => {
    setTex(tex.slice(0, tex.length - 1))
  }
  const cleared = () => {
    setTex("");
  }

  const calculate = () => {
    try {
      setTex(eval(tex).toString());
    }
    catch (error) {
      setTex("Error");
    }
  }

  

  return (
    <div >
    
      
        <div className="app">
          <p>Calculator</p>
          <div className={ a1 ? "container": b1 ? " containerD" : "containerG" }>
            <input cols="22" type="text" readOnly={true} dir="ltr" rows="1" value={tex}
             className={a1 ? "tArea": b1 ? "tAreaD": "tAreaG"} ></input>
            <div className="otherBtn">
              <button className="ta" onClick={backspace}>Del</button>
              <button className="ta" onClick={cleared}>AC</button>
            </div>
            <div className={a1 ? "inner": b1 ? "inner":"innerG"}>


              {

                arr.map((d) => (



                  <button className={d.extra ? "pbtn" :d.its ? "blc":"btn"  && a1 ? "btn": b1? "dbtn":"gbtn"    } onClick={!d.its ? () => handleClick(d.val) : () => calculate()}  >{d.val}</button>
                ))
              }
            </div>
          </div>



        </div>
      
      
    </div>
  )
}

export default Light
