import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ],
            newPostText: '',
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Ann'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Kirill'},
                {id: 5, name: 'Victor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Are you ok?'},
            ],
            newMessageText: ''
        }
    },

    _callSubscriber(state) {
        console.log('hello');
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPages = dialogReducer(this._state.dialogPages, action);
        this._callSubscriber(this._state);
    }


}

//window.store = store;
//export default store;