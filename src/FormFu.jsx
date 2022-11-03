import React, { useState } from "react";
import './Form.css';

function FormFu() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [val, setVal] = useState(0);
  const [info, setInfo] = useState("");

  return (
    <div class="registration-form">
    <form>
        <div class="form-icon">
            <span><i class="icon icon-"></i></span>
        </div>
        <div class="form-group">
            <input type={'text'} class="form-control item" placeholder="height" onChange={e => {
                   setHeight(e.target.value)
                }}/>
        </div>
        <div class="form-group">
            <input type={'text'} class="form-control item" placeholder="Weight" onChange={e => {
                    setWeight(e.target.value)
                }}/>
        </div>

        <div class="form-group">
            <button type="button" class="btn btn-block create-account"onClick={e => {
                    calculateBmi()
                }}>Submit</button>
        </div>
    </form>
    <div class="social-media">
    <h2>BMI {val.toFixed(2)}</h2>
            <h2>{info}</h2>
    </div>
</div>

  );

  function calculateBmi() {
    let val = (weight / Math.pow(height, 2)) ;
    setVal(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Normal weight");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obesity");
    }
    // console.log(weight / Math.pow(height, 2));
  }
}

export default FormFu;