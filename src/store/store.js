import listReducer from "./listReducer";
import { createStore, combineReducers} from "redux";


const rootReducer = combineReducers({
    Details:listReducer
    
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;