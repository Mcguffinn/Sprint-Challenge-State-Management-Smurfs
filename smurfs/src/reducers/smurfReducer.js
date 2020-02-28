// import {
//     GRAB_SMURFS,
//     GRAB_SMURFS_SUCCESS,
//     GRAB_SMURFS_FAILURE,
// } from "../actions/Smurfs";

const init = {
    smurf: [],
    error: '',
    grabbing: false
};

function smurfReducer(state = init, action){
    switch(action.type){
        case "GRAB_SMURFS":
            return {
                ...state,
                error: '',
                grabbing: true
            };
        case "GRAB_SMURFS_SUCCESS":
            return {
                ...state,
                error: '',
                grabbing: false,
                smurf: action.payload 
            };
        case "GRAB_SMURFS_FAILURE":
            return{
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default smurfReducer;