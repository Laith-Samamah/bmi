import React from 'react';
import './Form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'height': 0, 'Weight': 0, 'info': "", 'val': 0}
    }

    render() {
        return (
<div class="registration-form">
        <form>
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type={'text'} class="form-control item" placeholder="height" onChange={e => {
                        this.setState({'height': e.target.value})
                    }}/>
            </div>
            <div class="form-group">
                <input type={'text'} class="form-control item" placeholder="Weight" onChange={e => {
                        this.setState({'Weight': e.target.value})
                    }}/>
            </div>

            <div class="form-group">
                <button type="button" class="btn btn-block create-account"onClick={e => {
                        this.calculateBmi()
                    }}>Submit</button>
            </div>
        </form>
        <div class="social-media">
        <h2>BMI {this.state.val.toFixed(2)}</h2>
                <h2>{this.state.info}</h2>
        </div>
    </div>
        )
    }

    calculateBmi() {
        let val = this.state.Weight / ((Math.pow(this.state.height, 2))) 
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