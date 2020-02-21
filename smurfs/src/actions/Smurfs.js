import axios from 'axios';

export const GRAB_SMURFS = "GRAB_SMURFS"
export const GRAB_SMURFS_SUCCESS = "GRAB_SMURFS_SUCCESS"
export const GRAB_SMURFS_FAILURE = "GRAB_SMURFS_FAILURE"


export const Smurfs = () => dispatch =>{

    dispatch({type: GRAB_SMURFS});
    axios 
        .get("http://localhost:3333/smurfs")
        .then(response =>{
            console.log("Found: ", response.data);
            dispatch({ type: GRAB_SMURFS_SUCCESS, payload: response.data});
        })

        .catch(error =>{
            console.log("Error: issue with gettting the data ", error);
            dispatch({ 
                type: GRAB_SMURFS_FAILURE, 
                payload: `Error: issue with gettting the data ${error}`});
        })

}

export default Smurfs;