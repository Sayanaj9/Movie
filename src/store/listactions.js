const ADD_DATA = 'ADD_DATA';
// Actions
const addAction = (text) => ({
    type: ADD_DATA ,
    payload:text
});

export default{
    addAction,
    TYPES:{ADD_DATA}
}