const firebase = require("firebase")

export const sendMessage = (message) => ({
    type: 'SEND_MESSAGE',
    message
})

export function startChat(data){
    return{
        type: 'SEND_USER',
        data
    }
}

export const startSendMessage = (text) => {
    var estimatedServerTimeMs = 0;
    var offsetRef = firebase.database().ref(".info/serverTimeOffset");
    offsetRef.on("value", function (snap) {
        var offset = snap.val();
        estimatedServerTimeMs = new Date().getTime() + offset;
    });
    var date = new Date(estimatedServerTimeMs);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return (dispatch, getState) => {
        const user = getState().auth
        if (user) {
            const uid = user.uid
            const displayName = user.displayName
            const message = {
                sender: {
                    uid,
                    displayName
                },
                text,
                createdAt: formattedTime
            }
            return firebase.database().ref(`users/messages/${uid}/`).push(message);
        }
    }
}