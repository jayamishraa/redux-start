const initialState = {
    value: 0,
    arr: [1, 2, 3]
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state, 
                value: action.payload
            }
        case 'DECREMENT':
            return{
                ...state, 
                value: action.payload
            }

        case 'INC':
            return{
                ...state, 
                arr: state.arr.map(val=> val+action.payload)
            }
            
        default:
            return state;
    }
}

export default counterReducer