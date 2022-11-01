import React from 'react';
import './Form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'height': 0, 'Weight': 0, 'info': "", 'val': 0}
    }

    render() {
        return (
            <div className="mt-5">
                <form>
                    <label form="height">Height: </label>
                    <input type={'text'} id="height" name="height" onChange={e => {
                        this.setState({'height': e.target.value})
                    }}/>
                    <label form="wight">Wight: </label>
                    <input type={'text'} id="wight" name="wight" onChange={e => {
                        this.setState({'Weight': e.target.value})
                    }}/>
                    <button type="button" onClick={e => {
                        this.calculateBmi()
                    }}>Submit
                    </button>
                </form>
                <h2>BMI {this.state.val}</h2>
                <h2>{this.state.info}</h2>
            </div>
        )
    }

    calculateBmi() {
        let val = this.state.Weight / ((Math.pow(this.state.height, 2))) * 10000
        this.setState({'val': val})
        if (val < 18.5) {
            this.setState({'info': 'Under Weight'})
        } else if (val > 18.5 && val <= 24.9) {
            this.setState({'info': 'Normal weight'})
        } else if (val > 24.9 && val < 30) {
            this.setState({'info': 'Overweight'})
        } else {
            this.setState({'info': 'Obesity'})
        }
        console.log(this.state.Weight / (Math.pow(this.state.height, 2)))
    }
}

export default Form;