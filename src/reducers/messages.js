
const messages = (state = ["The most beautiful msg board I have ever seen","Flaggy flag forever","One true flag","Flaggy flag"], action) => {
    console.log("reducer")
    switch (action.type) {
        case 'ADD_MESSAGES':
            console.log("add");
            console.log(action)
            return [
                ...state,
                action.text
            ]
        case 'DELETE_MESSAGES':
            return state.filter((message, index) =>
                (index !== action.index)
            )
        case 'CLEAR_MESSAGES':
            console.log("clear");
            return []
        default:
            return state
    }
}

export default messages