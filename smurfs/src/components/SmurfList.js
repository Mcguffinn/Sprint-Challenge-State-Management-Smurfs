import React from "react";
import {getSmurfs} from  '../actions/Smurfs'
import SmurfForm from './SmurfForm';
import { connect } from "react-redux";


const mapProps = state => ({
    smurf: state.smurf,
    error: state.error
})

const SmurfList = props =>{

    const grabSmurfs = e =>{
        props.getSmurfs();
    };

    console.log(getSmurfs())

    return(
        <div>
            <div>
                {props.smurf.map(smurf => (
                    <h3>
                        name = {smurf.name}
                        age = {smurf.age}
                        height = {smurf.height}
                    </h3>
                ))}
                <button onClick={()=> grabSmurfs()}>Find em!</button>
                <SmurfForm addSmurf={props.addSmurf}/>
            </div>
        </div>
    );
}

export default connect(mapProps, {getSmurfs})(SmurfList);