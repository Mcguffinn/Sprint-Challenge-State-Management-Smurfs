import React from "react";
import {getSmurfs, deleteSmurf} from  '../actions/Smurfs'
import SmurfForm from './SmurfForm';
import { connect } from "react-redux";


const mapProps = state => ({
    smurf: state.smurf,
    error: state.error
})

const SmurfList = (props) =>{

    const grabSmurfs = e =>{
        props.getSmurfs();
    };
    
    const deleteSmurf = (e) =>{
        props.deleteSmurf(e);
    };


    return(
        <div>
            <div>
                {props.smurf.map(smurf => (
                    <div>
                        <p>name = {smurf.name}</p>
                        <p>age = {smurf.age}</p>
                        <p>height = {smurf.height}</p>
                        {console.log(smurf.id)}
                        <button onClick={()=> deleteSmurf(smurf.id)}>delete them!</button>
                    </div>
                    
                ))}
                <button onClick={()=> grabSmurfs()}>Find em!</button>
                
                <SmurfForm addSmurf={props.addSmurf}/>
            </div>
        </div>
    );
}

export default connect(mapProps, {getSmurfs,deleteSmurf})(SmurfList);