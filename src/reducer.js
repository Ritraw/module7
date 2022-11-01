import{
    ADD_ONE_TO_COUNTER,
    MINUS_ONE_TO_COUNTER
} from './action'

const initialState = {
    cartCount:0
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ONE_TO_COUNTER:
            return{
                ...state,
                counter: state.counter+1
            }
        case MINUS_ONE_TO_COUNTER:
            return{
                ...state,
                counter: state.counter-1
            }    
        default:
            return state   
    }
}