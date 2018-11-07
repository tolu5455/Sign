const chatReducer = (state = [], action) => {
    switch(action.type){
        case 'SEND_USER':
            return{...state,
                data: action.data
            }
        case 'SEND_MESSAGE':
            return{
                message: [action.message]
            }
        default:
            return state
    }
}

export default chatReducer