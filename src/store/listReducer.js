import listactions from "./listactions";

export default function listReducer(state={},action)
{
    if(listactions.TYPES.ADD_DATA)
    {
        return{...state,data:action.payload}
    }
    return state;
}

