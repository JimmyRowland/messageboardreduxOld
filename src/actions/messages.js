
export const addMessage = text => {
    // console.log(text);
    return {
        type: 'ADD_MESSAGES',
        text
    }
}

export const deleteMessage = index => ({
    type: 'DELETE_MESSAGES',
    index
})

export const clearMessages = () => {
    console.log("clear")
    return {
        type: 'CLEAR_MESSAGES'
    }
}
