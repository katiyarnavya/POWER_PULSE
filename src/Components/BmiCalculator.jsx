import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BmiCalculator = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [bmi, setBmi] = useState("");

  const calculateBmi = (e) =>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please eneter valid height, weight, gender");
      return;
    } 
    const heightInMeters = height/100;
    const bmiValue = (weight/(heightInMeters*heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if(bmiValue < 18.5){
      toast.warning(`You are under weight, Consider seeking advise from a health care provider`);
    }
    else if(bmiValue > 18.5 && bmiValue < 24.9){
      toast.success("You have normal weight, Keep maintaing a healthy lifestyle");
    }
    else if(bmiValue > 24.9 && bmiValue < 29.9){
      toast.warning("You are over weight, Consider seeking advise from a health care provider");
    }
    else{
      toast.error("You are not in good condition");
    }
    
  }

  return (
    <section className='bmi'>
        <h1>BMI CALCULATOR</h1>
        <div className="container">
          <div className="wrapper">
            <form onSubmit={calculateBmi}>
              <div>
                <label>Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required/>
              </div>
              <div>
                <label>Weight</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
              </div>
              <div>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type='submit'> Calculate BMI</button>
            </form>
          </div>
            <div className="wrapper">
              <img src="bmi.jpg" alt="BMIIMAGE" />
            </div>
        </div>

    </section>
  )
}

export default BmiCalculator
