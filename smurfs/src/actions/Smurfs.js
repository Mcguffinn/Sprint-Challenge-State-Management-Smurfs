import axios from 'axios';

export const GRAB_SMURFS = "GRAB_SMURFS"
export const GRAB_SMURFS_SUCCESS = "GRAB_SMURFS_SUCCESS"
export const GRAB_SMURFS_FAILURE = "GRAB_SMURFS_FAILURE"
export const DELETE_SMURFS = "DELETE_SMURFS"
// export const POST_SMURFS = 'POST_SMURFS'
// export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'
// export const  POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE'


export const getSmurfs = () => dispatch =>{
    axios 
        .get("http://localhost:3333/smurfs")
        .then(response =>{
            console.log("Found: ", response.data);
            dispatch({ type: 'GRAB_SMURFS_SUCCESS', payload: response.data});
        })

        .catch(error =>{
            console.log("Error: ", error);
            dispatch({ 
                type: 'GRAB_SMURFS_FAILURE', 
                payload: `Error: ${error}`});
        })

}

export const addSmurfs = newSmurf => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(response => {
            console.log("Posted: ", response.data);
            dispatch({type: 'POST_SMURFS_SUCCESS', 
            payload: response.data});
        })

        .catch(error=>{
            console.log("Error: issue with gettting the data ", error);
            dispatch({
                type: 'POST_SMURFS_FAILURE', 
                payload: `Error: issue with gettting the data ${error}` });
        });
};

export const deleteSmurf = (id) => dispatch => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response =>{
            console.log("deleted: ",response);
            dispatch({
                type: "DELETE_SMURFS",
                payload: response.data});
        })
        .catch(err => {
            console.log('smurf was not deleted', err)
        })

}