import React, { Component } from "react";
import {Smurfs} from  '../actions/Smurfs'
import SmurfForm from './SmurfForm';
import { connect } from "react-redux";


const mapProps = state => ({
    smurf: state.smurf,
    error: state.error
})

const SmurfList = props =>{

    const grabSmurfs = e =>{
        e.preventDefault();
        Smurfs();
    };

    console.log(Smurfs())

    return(
        <div>
            <div>
                {/* {store.map(smurf => (
                    <h3>
                        name = {smurf.name}
                        age = {smurf.age}
                        height = {smurf.height}
                    </h3>
                ))} */}
                <button onClick={grabSmurfs}>Find em!</button>
                <SmurfForm addSmurf={props.addSmurf}/>
            </div>
        </div>
    );
}

export default connect(mapProps, {Smurfs})(SmurfList);